const mqtt = require('mqtt')
const { broker, port, topic, protocol } = require('./config/broker')
const { urls } = require('./config/nextContainer.js')
const { module_name, module_type } = require('./config/thisContainer.js')
const fetch = require('node-fetch')

const client = mqtt.connect(broker, {
  port,
  protocol,
})

client.on('connect', () => {
  console.info('Connected to broker')
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
