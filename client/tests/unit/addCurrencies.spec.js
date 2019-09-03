import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Home from '../../src/views/Home.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Home.vue', () => {
  it('adding a new currency', () => {
    // const msg = 'USD Currency Converter'
    const wrapper = mount(Home, { localVue })
    wrapper.find('button').trigger('click')
    // console.log(wrapper.find('button'), 'halo testing ini wrapper b-button')
    // expect(wrapper.text())
    console.log(wrapper.text(), 'ini wrapper text')
    expect(wrapper.text())
    // expect(wrapper.text())
    // console.log(wrapper.text())
    // expect(wrapper.text()).to.include(msg)
  })
})
