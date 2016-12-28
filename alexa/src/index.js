'use strict';

const Alexa = require("alexa-sdk");
const youtube = require('./youtube-tv');

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('StartIntent');
    },
    'StartIntent': function () {
        youtube.startPlayer()
            .then(() => this.emit(':responseReady'));
    }
};