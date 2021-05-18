const env = require('../util/env')

module.exports = {
  host: env('HTTP_HOST', 'http://localhost:3030'),
}
