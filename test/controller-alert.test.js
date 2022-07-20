const controllerAlerts = require('./../src/controller-alert');

const {expect} = require('chai');

it('Send controller alert on TOO_LOW status ', () => {
  expect(controllerAlerts.sendToController('TOO_LOW'))
      .equals('TOO_LOW_STATUS_CONTROLLER_ALERT_SENT');
});

it('Send controller alert on TOO_HIGH status ', () => {
  expect(controllerAlerts.sendToController('TOO_HIGH'))
      .equals('TOO_HIGH_STATUS_CONTROLLER_ALERT_SENT');
});

it(' Send controller alert on NORMAL status ', () => {
  expect(controllerAlerts.sendToController('NORMAL'))
      .equals('NORMAL_STATUS_CONTROLLER_ALERT_SENT');
});

it('Not Send controller alert on FALSE status ', () => {
  expect(controllerAlerts.sendToController('RANDOM_INPUT'))
      .equals(false);
});
