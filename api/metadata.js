const expressHandler = require('express');
const expressRouter = expressHandler.Router();

expressRouter.get('/video/:videoID', (request, result, next) => {
    var videoID = request.params.videoID;
    result.status(200).json({
        message: 'requested video ID : ' + videoID
    })
})

expressRouter.get('/channel/:channelID', (request, result, next) => {
    var channelID = request.params.channelID;
    result.status(200).json({
        message: 'requested channel ID : ' + channelID
    })
})

module.exports = expressRouter;