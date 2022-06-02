/* eslint-disable @typescript-eslint/no-var-requires */
var express = require('express')
var apiMocker = require('connect-api-mocker')
const cors = require('cors')
const port = 3001
var app = express()
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use('/api', apiMocker('mock-api'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
