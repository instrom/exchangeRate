const Currency = require('../models/currency')
const axios = require('axios')


class CurrencyController {
  static findAll(req,res,next) {
    Currency.find()
      .then((data) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static create(req,res,next) {
    axios.get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(({data}) => {
        if(data.rates[req.body.currencyName]) {
          console.log('asd')
          // Currency.create
          return Currency.create({
            currencyName: req.body.currencyName,
            date: data.date,
            value: data.rates[req.body.currencyName]
          })
        } else {
          throw {
            status: 404,
            message: 'Currency not Found!'
          }
        }
      })
      .then((created) => {
        // console.log('masuk sini ngak?')
        // console.log(created)
        res.status(201).json(created)
      })
      .catch(next)
  }
}
module.exports = CurrencyController