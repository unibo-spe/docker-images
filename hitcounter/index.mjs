import { env } from 'process'
import express from 'express'
import { randomBytes } from 'crypto'

const port = 'SERVICE_PORT' in env ? env.SERVICE_PORT : 8080
const hostname = 'HOSTNAME' in env ? env.HOSTNAME : 'localhost'
// 16-char random string
const serverID = randomBytes(8).toString('hex')

const server = express()

let counter = 0
 
server.get('/', function (req, res) {
  counter++
  res.send(`[${serverID}@${hostname}:${port}] Hit ${counter} times`)
})
 
console.log(`Service ${serverID} listening on ${hostname}:${port}`)
server.listen(port)
