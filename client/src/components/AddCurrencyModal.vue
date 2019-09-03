<template>
   <b-modal id="modal-1" title="Add New Currency" hide-footer ref="my-modal">
     <b-form @submit.prevent="addNewCurrency">
      <b-form-group
        label="Currency Name"
      >
        <b-form-select v-model="currencyName" class="mb-3">
          <option :value="null">Please select an option</option>
          <option value="CAD">$ CAD</option>
          <option value="HKD">HK $</option>
          <option value="EUR">€ EUR</option>
          <option value="ISK">ISK</option>
          <option value="PHP">PHP</option>
          <option value="DKK">DKK</option>
          <option value="AUD">AUD</option>
          <option value="SGD">SGD</option>
          <option value="GBP">GBP</option>
          <option value="CHF">CHF</option>
          <option value="INR">INR</option>
          <option value="MYR">MYR</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="IDR">IDR</option>
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary" class="float-right">Submit</b-button>
     </b-form>
  </b-modal>
</template>

<script>
const baseUrl = 'http://35.187.253.44/api/currencies/'
import axios from 'axios'
export default {
  name: 'AddCurrencyModal',
  data() {
    return {
      currencyName: '',
      count: 0
    }
  },
  methods: {
    addNewCurrency() {
      axios.post(baseUrl, {
        currencyName: this.currencyName
      })
        .then((dataCreated) => {
          this.$refs['my-modal'].hide()
          this.currencyName = ''
          this.count++;
          this.$emit('added', this.count)
        })
        .catch((error) => {
          // console.log(erro)
        })
    }
  }
}
</script>

<style>

</style>