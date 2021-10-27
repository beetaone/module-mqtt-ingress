# MQTT Ingress

|                |                                 |
| -------------- | ------------------------------- |
| Name           | MQTT Ingress                    |
| Version        | v0.0.1                          |
| Dockerhub Link | weevenetwork/weeve-mqtt-ingress |
| Authors        | Sanyam Arya                     |



- [MQTT Ingress](#mqtt-ingress)
  - [Description](#description)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
    - [Module Specific](#module-specific)
    - [Set by the weeve Agent on the edge-node](#set-by-the-weeve-agent-on-the-edge-node)
  - [Dependencies](#dependencies)




## Description

MQTT Ingress is an ingress module responsible for getting data into the data service.
It subscribe to a MQTT Broker on a topic.

## Features

* Subscribe to MQTT Broker
* Ingresses data into data service

## Environment Variables

### Module Specific

The following module configurations can be provided in a data service designer section on weeve platform:


| Name                | Environment Variables | Type    | Description                |
| ------------------- | --------------------- | ------- | -------------------------- |
| MQTT Broker Address | MQTT_BROKER           | string  | eg: test.mosquitto.org     |
| MQTT Protocol       | PROTOCOL              | string  | `mqtt | ws`                |
| Connection Port     | PORT                  | integer | Port number for tbe broker |
| Topic               | TOPIC                 | string  | Topic to subscribe         |
| Quality of Service  | QOS                   | integer | Quality of Service         |

Other features required for establishing the inter-container communication between modules in a data service are set by weeve agent.

### Set by the weeve Agent on the edge-node

| Environment Variables | type   | Description                            |
| --------------------- | ------ | -------------------------------------- |
| EGRESS_URL       | string | HTTP ReST endpoint for the next module |
| MODULE_NAME           | string | Name of the module                     |



## Dependencies

```js
"dependencies": {
    "mqtt": "^4.2.6",
    "node-fetch": "^2.6.1"
}
```