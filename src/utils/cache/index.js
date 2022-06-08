

const localforage  = require('localforage')

localforage.config({
    //driver      : localforage.WEBSQL, 
    name        : 'localforage',
    version     : 1.0,
    //size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : ''
});

localforage.ready().then(function() {
    console.log(localforage.driver()); 
}).catch(function (e) {
    console.log(e); 
});

module.exports = localforage;