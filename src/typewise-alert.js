const controllerAlert = require('./controller-alert');
const emailAlert = require('./email-alert');
const tempBreach = require('./typewise-temp-breach');

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = tempBreach.classifyTemperatureBreach(batteryChar, temperatureInC);
  let status = false;
  if (alertTarget == 'TO_CONTROLLER') {
    status = controllerAlert.sendToController(breachType);
    return status;
  } else if (alertTarget == 'TO_EMAIL') {
    status = emailAlert.sendToEmail(breachType);
    return status;
  } else {
    return false;
  }
}
module.exports = {checkAndAlert};


