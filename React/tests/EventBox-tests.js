var expect = require('must');
var chai = require('chai');
var sinon = require('sinon').sandbox.create();
var sinonChai = require("sinon-chai");
var chai_expect = chai.expect;
chai.use(sinonChai);



var EventBoxController = require('../js/EventBoxController');
var util = require('../js/util');


describe('EventBox', function() {

  var events;
  var view;
  var getAllDashboardEventsStub;
  beforeEach(function() {
    events = [];
    getAllDashboardEventsStub = sinon.stub(util, 'getAllDashboardEvents');
    view = {
      update: sinon.stub(),
      render: sinon.stub()
    };
  });

  afterEach(function() {
    sinon.restore(); // reset all mocks
  });

  it('render the view on instantiation', function() {
    var controller = new EventBoxController(view);
    controller.render();

    chai_expect(view.render)
      .to.have.been.called;
  });

  describe('get data via ajax', function() {
    it('should pass the data to EventBox', function() {
      getAllDashboardEventsStub.yields(null, events);
      var controller = new EventBoxController(view);
      controller.render();

      chai_expect(view.update)
        .to.have.been.calledWith(events);
    });
  });

});
