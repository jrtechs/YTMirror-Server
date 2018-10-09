const http = require('http');
const port = process.env.PORT || 62988;

const expressHandler = require('express');
const service = expressHandler();

const metaApi = require('./api/metadata');
service.use('/meta', metaApi);
service.use('/', (req, res, next) => {
    res.status(403).json({
        message: 'You do not have permission to access this resource'
    })
})
const server = http.createServer(service);

server.listen(port, 'localhost');