let forceDev = true;

if(!forceDev && process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod');
}
else {
  module.exports = require('./store.dev');
}