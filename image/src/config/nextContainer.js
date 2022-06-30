const env = require('../util/env')

const parseUrls = () => {
  var urls = env('EGRESS_URLS', 'http://localhost:3030');

  // remove whitespaces
  urls = urls.replace(/\s/g, '');
  // remove trailing comas ,
  urls = urls.replace(/^\,+|\,+$/g, '');
  urls = urls.split(',')

  return urls;
};

module.exports = {
  urls: parseUrls(),
}
