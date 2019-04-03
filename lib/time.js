'use strict'

const nullTime = (key) => ''

const epochTime = (key) => `,"${key || 'time'}":${Date.now()}`

const unixTime = (key) => `,"${key || 'time'}":${Math.round(Date.now() / 1000.0)}`

module.exports = { nullTime, epochTime, unixTime }
