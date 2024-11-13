'use strict'
const axios = require('axios')

/**
 * Collects lots of utilities
 * @class
 * @static
 */
class Util {
  /**
   * @constructor
   */
  constructor() {
  }

  /**
   * Format new Date() toString(yyyy-MM-dd HH:mm:ss)
   * @return {string} json object of this key
   * @static
   */
  static nowToString() {
    let d = new Date()
    return d.getFullYear() + "-" +
      ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
      ("00" + d.getDate()).slice(-2) + " " +
      ("00" + d.getHours()).slice(-2) + ":" +
      ("00" + d.getMinutes()).slice(-2) + ":" +
      ("00" + d.getSeconds()).slice(-2)
  }

  /**
 * Format new Date() toString(yyyy-MM-dd HH:mm:ss)
 * @return {string} json object of this key
 * @static
 */
  static createRequest(config) {
    if (config.method.toUpperCase() == "POST") {
      return axios.post(config.url, config.body, config.headers)
    } else if (config.method.toUpperCase() == "GET") {
      return axios.get(config.url, config.body, config.headers)
    }
    throw "NOT implemented method: " + config.method
  }
}

module.exports = Util