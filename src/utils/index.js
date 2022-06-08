const _u = require('./Util')
const Http = require('./http')('fetch')

const util = {
    ..._u,
    Http
}

module.exports = util;
