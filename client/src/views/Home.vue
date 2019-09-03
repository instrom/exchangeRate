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
     <ListCurrencies v-for="dataCurrency in dataCurrencies" :key="dataCurrency._id" :oneCurrency="dataCurrency" :input="inputValue"></ListCurrencies>
    <b-button style="marginTop: 20px;">
      Add new Currency
    </b-button>
   </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListCurrencies from '../components/ListCurrencies'
import axios from 'axios'
let baseUrl = 'http://localhost:3000/api/currencies'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListCurrencies
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
    }
  }
}
</script>
