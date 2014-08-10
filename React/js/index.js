var React = require('react');
var EventBoxController = require('./EventBoxController');
var EventView = require('./EventView');

var controller = new EventBoxController(new EventView());
controller.render();
