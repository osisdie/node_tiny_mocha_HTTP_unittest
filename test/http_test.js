const assert = require('assert'),
  nconf = require('nconf')

const Util = require('../lib/util.js')

nconf.argv()
  .env()
  .file({ file: 'conf/config.json' })

let hosts = nconf.get('hosts')

Object.keys(hosts).forEach(function (group) {
  let execute = describe
  if (group === "example") execute = describe.skip

  hosts[group].forEach(function (item) {
    let url = item.url
    let method = item.method
    execute(method + ' ' + url, function () {
      it('should return 200', function () {
        Util.createRequest(item)
          .then((res) => {
            assert.equal(200, res.status)
          })
          .catch((error) => {
            // console.error(error)
          })
      })
    })
  })
})