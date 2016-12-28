'use strict';

const fetch = require('node-fetch');

exports.startPlayer = function () {
    return fetch('https://e3a317ca.ngrok.io/start');
}
