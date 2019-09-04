const router = require('express').Router()
const CurrencyController = require('../controllers/CurrencyController')
router.get('/',CurrencyController.findAll)
router.post('/',CurrencyController.create)
router.delete('/:id',CurrencyController.delete)

module.exports = router
