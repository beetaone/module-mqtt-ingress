const mqtt = require('mqtt')
const { broker, port, topic, protocol } = require('./config/broker')
const { urls } = require('./config/nextContainer.js')
const fetch = require('node-fetch')
const { URL } = require('url')

var brokerUrl = broker

try {
  brokerUrl = new URL(brokerUrl)

  const supportedProtocols = ['mqtt:', 'mqtts:']

  if(supportedProtocols.includes(brokerUrl.protocol)) {
    brokerUrl = brokerUrl.href
  } else {
    console.error(`Unsupported url protocol (${brokerUrl.protocol}). Please provide mqtt:// or mqtts:// urls.`)
    // kill the program
    process.exit(1);
  }

} catch (e) {
  if (e.code === 'ERR_INVALID_URL') {
    if (!brokerUrl.includes("://")) {
      // url address missing protocol so compose it basing on module envs
      brokerUrl = protocol + '://' + broker
    } else {
      console.error(e)
      // kill the program
      process.exit(1);
    }
  } else {
    console.error(e)
    // kill the program
    process.exit(1);
  }
}

const client = mqtt.connect(brokerUrl, {
  port,
  protocol,
})

client.on('connect', () => {
  console.info(`Connected to broker ${brokerUrl}`)
  client.subscribe(topic, err => err && console.error(err))
})

client.on('error', err => {
  client.end()
  console.log(err)
})

client.on('message', (_, body) => {
  console.log(body.toString())

  // fan-out
  console.log(urls)
  urls.forEach(url => {
    fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body })
    .then(res => console.log(res))
    .catch(e => console.error(e))
  })
})
