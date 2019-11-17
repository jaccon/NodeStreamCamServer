const express = require('express');
const app = express();
const configs = require('./config/config');

const httpStreamPort = configs.serverStreamPort;
const httpServerPort = configs.httpServerPort;
const camUrl = configs.camUrl;
const camName = configs.camName;

Streaming = require('node-rtsp-stream');
    stream = new Streaming({
    name: `${camName}`,
    streamUrl: `${camUrl}`,
    wsPort: `${httpStreamPort}`,
    ffmpegOptions: {
        '-stats': '',
        '-r': 30
    }
});

app.use(express.static('./public'));
app.listen(httpServerPort);
console.log('http server');