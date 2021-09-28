const mqtt = require('mqtt')
const { broker, port, topic, protocol } = require('./config/broker')
const { host } = require('./config/nextContainer.js')
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
  fetch(host, { method: 'POST', body })
    .then(res => console.log(res))
    .catch(e => console.error(e))
})
