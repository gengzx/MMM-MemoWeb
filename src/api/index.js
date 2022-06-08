

const Http = require('utils/http')("fetch");

const common = require('./api.common')(Http);
const demo = require('./api.demo')(Http);

const Api = {
    common,
    demo
}

module.exports = Api;
