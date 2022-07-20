const config = require('./typeConfig.json');

function sendToEmail(breachType) {
  const recepient = 'a.b@c.com';
  if (config.BREACH_TYPE.includes(breachType)) {
    if (breachType != 'NORMAL') {
      const statusText = breachType.split('_');
      console.log(`To: ${recepient}`);

      console.log('Hi, the temperature is '+
      statusText[0].toLowerCase()+' '+ statusText[1].toLowerCase());
      return breachType+'_STATUS_EMAIL_ALERT_SENT';
    }
  }
  return false;
}
module.exports = {sendToEmail};
