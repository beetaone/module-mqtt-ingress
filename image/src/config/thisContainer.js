const env = require('../util/env')

module.exports = {
  module_name: env('MODULE_NAME', 'mqtt-ingress'),
  module_type: env('MODULE_TYPE', 'Input')
}
