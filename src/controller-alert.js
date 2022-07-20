const config = require('./typeConfig.json');

function sendToController(breachType) {
  const header = 0xfeed;
  if (config.BREACH_TYPE.includes(breachType)) {
    console.log(`${header}, ${breachType}`+breachType+'_STATUS_CONTROLLER_ALERT_SENT');
    return breachType+'_STATUS_CONTROLLER_ALERT_SENT';
  }
  return false;
}
module.exports = {sendToController};
