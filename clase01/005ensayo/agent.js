const http = require('http')

const keepAliveAgent = new http.Agent({ keepAlive: true })

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET',
  agent: keepAliveAgent
}

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`)
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

req.end()
