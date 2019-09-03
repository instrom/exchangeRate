<template>
   <b-modal id="modal-1" title="Add New Currency" hide-footer ref="my-modal">
     <b-form @submit.prevent="addNewCurrency">
      <b-form-group
        label="Currency Name"
      >
        <b-form-input
        v-model="currencyName"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="float-right">Submit</b-button>
     </b-form>
  </b-modal>
</template>

<script>
const baseUrl = 'http://localhost:3000/api/currencies/'
import axios from 'axios'
export default {
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