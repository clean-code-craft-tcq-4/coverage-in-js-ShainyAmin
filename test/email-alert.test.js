const emailAlerts = require('./../src/email-alert');

const {expect} = require('chai');

it('Send mail on TOO_LOW alert ', () => {
  expect(emailAlerts.sendToEmail('TOO_LOW'))
      .equals('TOO_LOW_STATUS_EMAIL_ALERT_SENT');
});

it('Send mail on TOO_HIGH alert ', () => {
  expect(emailAlerts.sendToEmail('TOO_HIGH'))
      .equals('TOO_HIGH_STATUS_EMAIL_ALERT_SENT');
});

it('Not Send mail on NORMAL alert ', () => {
  expect(emailAlerts.sendToEmail('NORMAL'))
      .equals(false);
});

it('Not Send mail on FALSE alert ', () => {
  expect(emailAlerts.sendToEmail('RANDOM_INPUT'))
      .equals(false);
});


