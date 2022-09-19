const mqtt = require('mqtt')
const { broker, port, topic, protocol } = require('./config/broker')
const { urls } = require('./config/nextContainer.js')
const fetch = require('node-fetch')

if(broker.includes('tcp') || broker.includes('tls') || broker.includes('ws') || broker.includes('wss') || broker.includes('wxs') || broker.includes('alis')) {
  console.error("Unsupported url protocol. Please provide mqtt:// or mqtts:// urls.")
} else {
  var brokerUrl = broker;

  if (!broker.includes('mqtt://') && !broker.includes('mqtts://')) {
    brokerUrl = protocol + '://' + broker
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
}
