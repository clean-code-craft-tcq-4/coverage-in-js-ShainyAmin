const alerts = require('./../src/typewise-alert');
// eslint-disable-next-line no-unused-vars
const {expect} = require('chai');

it('test to check PASSIVE_COOLING :', () => {
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'PASSIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'PASSIVE_COOLING', 30))
      .equals('NORMAL_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'PASSIVE_COOLING', 36))
      .equals('TOO_HIGH_STATUS_CONTROLLER_ALERT_SENT');

  expect(alerts.checkAndAlert('TO_EMAIL', 'PASSIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_EMAIL_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_EMAIL', 'PASSIVE_COOLING', 30)).equals(false);
  expect(alerts.checkAndAlert('TO_EMAIL', 'PASSIVE_COOLING', 36))
      .equals('TOO_HIGH_STATUS_EMAIL_ALERT_SENT');
  expect(alerts.checkAndAlert('RANDOM_ALERT', 'RANDOM_TYPE', 0)).equals(false);
});

it('test to check HI_ACTIVE_COOLING :', () => {
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'HI_ACTIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'HI_ACTIVE_COOLING', 30))
      .equals('NORMAL_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'HI_ACTIVE_COOLING', 45.5))
      .equals('TOO_HIGH_STATUS_CONTROLLER_ALERT_SENT');

  expect(alerts.checkAndAlert('TO_EMAIL', 'HI_ACTIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_EMAIL_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_EMAIL', 'HI_ACTIVE_COOLING', 30)).equals(false);
  expect(alerts.checkAndAlert('TO_EMAIL', 'HI_ACTIVE_COOLING', 45.5))
      .equals('TOO_HIGH_STATUS_EMAIL_ALERT_SENT');
});

it('test to check MED_ACTIVE_COOLING :', () => {
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'MED_ACTIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'MED_ACTIVE_COOLING', 30))
      .equals('NORMAL_STATUS_CONTROLLER_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_CONTROLLER', 'MED_ACTIVE_COOLING', 41))
      .equals('TOO_HIGH_STATUS_CONTROLLER_ALERT_SENT');

  expect(alerts.checkAndAlert('TO_EMAIL', 'MED_ACTIVE_COOLING', -1))
      .equals('TOO_LOW_STATUS_EMAIL_ALERT_SENT');
  expect(alerts.checkAndAlert('TO_EMAIL', 'MED_ACTIVE_COOLING', 30)).equals(false);
  expect(alerts.checkAndAlert('TO_EMAIL', 'MED_ACTIVE_COOLING', 41))
      .equals('TOO_HIGH_STATUS_EMAIL_ALERT_SENT');
});
