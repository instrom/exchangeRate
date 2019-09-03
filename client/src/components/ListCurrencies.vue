<template>
  <b-card style="marginBottom: 10px;">
    <b-row>
      <b-col>
       <h1>
         {{oneCurrency.currencyName}}
       </h1>
       <h6>
         Date: {{oneCurrency.date.substring(0,10)}}
       </h6>
       <h6>
         1 {{oneCurrency.currencyName}} = {{oneCurrency.value.toFixed(2)}}
       </h6>
        <!-- <b-card-text>A second paragraph of text in the card.</b-card-text> -->

      </b-col>
        <b-col >
        <h1 v-if="input">
          {{oneCurrency.currencyName}}
          {{(oneCurrency.value * input).toFixed(2)}}
        </h1>
        <h1 v-else>
          {{oneCurrency.currencyName}}
          {{oneCurrency.value.toFixed(2)}}
        </h1>
          <b-button variant="danger" class="float-right" @click="deleteCurrency">Delete</b-button>
        </b-col>
    </b-row>
  </b-card>
</template>

<script>
const baseUrl = `http://35.187.253.44/api/currencies`
import axios from 'axios'
export default {
  name: 'ListCurrencies',
  methods: {

  },
  props: ['oneCurrency', 'input'],
  data() {
    return {

    }
  },
  methods: {
    deleteCurrency() {
      // console.log(this.oneCurrency)
      axios.delete(`${baseUrl}/${this.oneCurrency._id}`)
        .then((data) => {
          // console.log(oneCurrency)
          this.$emit('deleted')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>