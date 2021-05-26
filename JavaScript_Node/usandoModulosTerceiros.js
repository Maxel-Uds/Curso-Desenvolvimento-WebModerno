const { set } = require('lodash');
const _ = require('lodash'); //O _ geralmente se refere a um importe da biblioteca lodash
setInterval(() => console.log(_.random(0, 1)), 2000);