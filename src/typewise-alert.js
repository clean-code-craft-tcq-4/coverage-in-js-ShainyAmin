const controllerAlert = require('./controller-alert');
const emailAlert = require('./email-alert');
const tempBreach = require('./typewise-temp-breach');

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = tempBreach.classifyTemperatureBreach(batteryChar, temperatureInC);
  if (alertTarget == 'TO_CONTROLLER') {
    return controllerAlert.sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    return emailAlert.sendToEmail(breachType);
  }
  return false;
}
module.exports = {checkAndAlert};


