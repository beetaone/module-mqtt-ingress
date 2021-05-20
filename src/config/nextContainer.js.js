const env = require('../util/env')

module.exports = {
  host: env('EGRESS_API_HOST', 'http://localhost:3030'),
}
