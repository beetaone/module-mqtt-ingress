const env = require('../util/env')

module.exports = {
  module_name: env('MODULE_NAME', 'weeve-ingress-mqtt'),
  module_type: env('MODULE_TYPE', 'INGRESS')
}
