global.window = global;

const setGlobalVars = require('../dist/indexeddbshim-node');
// const setGlobalVars = require('../dist/indexeddbshim-node.min');

setGlobalVars();
// shimIndexedDB.__debug(true);

window.DOMException = indexedDB.modules.ShimDOMException;
window.Event = indexedDB.modules.ShimEvent;

module.exports = global.indexedDB;
