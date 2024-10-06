const env = require('../util/env')

module.exports = {
  broker: env('MQTT_BROKER', 'mqtt://test.mosquitto.org'),
  protocol: env('PROTOCOL', 'mqtt'),
  topic: env('TOPIC', 'beetaone/test'),
  port: env('PORT', 1883),
  qos: env('QOS', 0),
}