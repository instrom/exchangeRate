import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Home from '../../src/views/Home.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'USD Currency Converter'
    const wrapper = shallowMount(Home, {
      propsData: { msg },
      localVue
    })
    // console.log(wrapper.text())
    expect(wrapper.text()).to.include(msg)
  })
})
