'use strict';

const fetch = require('node-fetch');
const config = require('./config');

exports.startPlayer = function () {
    return fetch(config.baseUrl + '/start');
}
