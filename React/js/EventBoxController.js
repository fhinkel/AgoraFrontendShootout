var React = require('react');
var util = require('./util');


function EventBoxController(view) {
    this._view = view;
}

EventBoxController.prototype = {
    render: function () {
        util.getAllDashboardEvents(this.renderNewData.bind(this));
    },

    renderNewData: function (error, data) {
        this._view.update(data);
    }
};

module.exports = EventBoxController;
