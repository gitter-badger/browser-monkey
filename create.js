var Selector = require('./selector');
var finders = require('./finders');
var actions = require('./actions');
var assertions = require('./assertions');

module.exports = function(rootSelector) {
  return new Selector(rootSelector)
    .component(finders)
    .component(actions)
    .component(assertions);
}
