const express = require('express');
//const https = require('spdy');
//const cors=require('cors');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');
//const fs = require('fs');
const http = require('http');
//const privateKey  = fs.readFileSync('./server.key', 'utf8');
//const certificate = fs.readFileSync('./server.crt', 'utf8');
//const credentials = {key: privateKey, cert: certificate};

const app = express();
const router = require('./router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/croissants',{useNewUrlParser:true});
mongoose.set('useFindAndModify', false);
//app.use(morgan('combined'));
//const port = 443;
const PORT = 3000;
const httpServer = http.createServer(app);

router(app);

httpServer.listen(PORT);
console.log(`Server listening on port ${PORT}`);