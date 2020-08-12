const assert = require('assert')

const vm = require('./script')

vm('test.js', (result) => {
    assert(result === 100510)
    console.log('OK')
})
