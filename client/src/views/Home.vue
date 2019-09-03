<template>
  <div class="home">
   <b-container style="marginTop: 20px;">
     <h1 style="text-align:center;">USD Currency Converter</h1>
      <b-input-group prepend="$" append=".00">
        <b-form-input
          v-model="inputValue"
          placeholder="Input Value here"
        >
        </b-form-input>
       </b-input-group>
       <br>
     <ListCurrencies v-for="dataCurrency in dataCurrencies" :key="dataCurrency._id" :oneCurrency="dataCurrency" :input="inputValue" @deleted="onAdded"></ListCurrencies>
      <b-button style="marginTop: 20px;" v-b-modal.modal-1>
        Add new Currency
      </b-button>
   </b-container>
   <AddCurrencyModal @added="onAdded"></AddCurrencyModal>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ListCurrencies from '../components/ListCurrencies'
import AddCurrencyModal from '../components/AddCurrencyModal'
import axios from 'axios'
let baseUrl = 'http://35.187.253.44/api/currencies'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    ListCurrencies,
    AddCurrencyModal
  },
   data () {
    return {
      dataCurrencies: [],
      inputValue: ''
    }
  },
  created() {
    this.getCurrencies()
  },
  methods: {
    getCurrencies() {
      axios.get(baseUrl)
        .then(({data}) => {
          this.dataCurrencies = data
          // console.log(this.dataCurrency)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onAdded(value) {
      console.log('masuk sini pak')
      console.log(value)
      this.getCurrencies()
    }
  }
}
</script>
