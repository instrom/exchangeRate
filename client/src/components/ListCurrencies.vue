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
          <b-button variant="danger" class="float-right">Delete</b-button>
        </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  methods: {

  },
  props: ['oneCurrency', 'input'],
  data() {
    return {

    }
  },
  methods: {
    deleteCurrency() {

    }
  }
}
</script>

<style>

</style>