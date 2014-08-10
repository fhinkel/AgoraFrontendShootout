var React = require('react');
var EventBox = require('jsx!./EventBox');

function View() {}

View.prototype = {

  _view: null,

  render: function() {
    this._view = React.renderComponent(
        EventBox({events: []}),
        document.getElementById('events')
    );
  },

  update: function(events) {
    this._view.setProps({events: events});
  }
};

module.exports = View;

