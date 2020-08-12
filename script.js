const vm = require('vm')
const fs = require('fs')

let callback = () => {}

module.exports  = function (fileName, _callback) {
    callback = _callback

    fs.readFile(fileName, 'utf-8', (err, code) => {
        if (err) throw err

        const context = {testQuery, testResult }
        vm.createContext(context)
        vm.runInContext(code, context)
    })
}

function testQuery(callback) { 
    setTimeout(function() { callback(100500); }, 2000)
}

function testResult(result) { 
    callback(result)
}
