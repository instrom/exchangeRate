const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CurrencySchema = new Schema({
  currencyName: {
    type: String,
    validate: {
      validator: function(value) {
        return mongoose.model('Currency', CurrencySchema).findOne({currencyName: value})
          .then((dataFound) => {
            if(dataFound) {
              return false
            }
          })
      },
      message: props => `currency ${props.value} is already listed`
    },
    required: [true, `Currency Name is required!`]
  },
  date: {
    type: Date
  },
  value: {
    type: Number,
    required: [true, 'Value of the currency is required']
  }
},{
  versionKey: false
})

const Currency = mongoose.model('Currency',CurrencySchema)
// const mongoose = require('mongoose')


module.exports = Currency