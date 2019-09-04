import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
// import BootstrapVue from 'bootstrap-vue'
import ListCurrencies from '../../src/components/ListCurrencies.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('ListCurrencies.vue', () => {
  it('renders currencies list', () => {
    // const msg = 'USD Currency Converter'
    const oneCurrency = {
      currencyName: 'IDR',
      date: '2019-01-01',
      value: 14000
    }
    const wrapper = shallowMount(ListCurrencies, {
      propsData: { oneCurrency },
      localVue
    })
    // console.log(wrapper)
    console.log(wrapper.text())
    expect(wrapper.text()).to.include(oneCurrency.currencyName)
    // expect(wrapper.text()).to.include(msg)
  })
})
