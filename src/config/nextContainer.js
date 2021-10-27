const env = require('../util/env')

module.exports = {
  host: env('EGRESS_URL', 'http://localhost:3030'),
}
