import data from '../static/goods.json';

const bodyParser = require('body-parser')
const app = require('express')()


app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json(data)
})

module.exports = app
