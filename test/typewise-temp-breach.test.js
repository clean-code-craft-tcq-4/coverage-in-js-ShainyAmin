const classifyTemperatureBreach = require('./../src/typewise-temp-breach');

const {expect} = require('chai');

it('test to check temperature breach on PASSIVE_COOLING :', () => {
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'PASSIVE_COOLING', -1))
      .equals('TOO_LOW');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'PASSIVE_COOLING', 30))
      .equals('NORMAL');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'PASSIVE_COOLING', 36))
      .equals('TOO_HIGH');


  expect(classifyTemperatureBreach.classifyTemperatureBreach('RANDOM_TYPE', 0)).equals(false);
});

it('test to check temperature breach on HI_ACTIVE_COOLING :', () => {
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach('HI_ACTIVE_COOLING', -1))
      .equals('TOO_LOW');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach('HI_ACTIVE_COOLING', 30))
      .equals('NORMAL');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach('HI_ACTIVE_COOLING', 45.5))
      .equals('TOO_HIGH');
});

it('test to check temperature breach on MED_ACTIVE_COOLING :', () => {
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'MED_ACTIVE_COOLING', -1))
      .equals('TOO_LOW');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'MED_ACTIVE_COOLING', 30))
      .equals('NORMAL');
  expect(classifyTemperatureBreach
      .classifyTemperatureBreach( 'MED_ACTIVE_COOLING', 41))
      .equals('TOO_HIGH');
});

