const inferBreach = require('./breach-infer');
const config = require('./typeConfig.json');

function classifyTemperatureBreach(coolingType, temperatureInC) {
  if (Object.prototype.hasOwnProperty.call(config.COOLING_TYPE, coolingType)) {
    const coolingTypeClasification = config.COOLING_TYPE[coolingType];
    return inferBreach.inferBreach(temperatureInC,
        coolingTypeClasification[0], coolingTypeClasification[1]);
  }
  return false;
}
module.exports = {classifyTemperatureBreach};
classifyTemperatureBreach( 'PASSIVE_COOLING', -1);
