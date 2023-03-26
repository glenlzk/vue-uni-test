import { shallowMount, mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '@/pages/index/index.vue'
import ChildComponent from '@/pages/index/childComponent.vue'

describe('HelloWorld.vue', () => {
  const msg = 'Vue + Ts + Vitest'
  // 也可以使用 mount
  const wrapper = mount(HelloWorld, {
    propsData: {
      msg
    }
  })

  it('render props message when passed', () => {
    expect(wrapper.get('h1').text()).toBe('Vue + Ts + Vitest')
  })

  it("displays 'Emitted!' when custom event is emitted", async () => {
    wrapper.findComponent(ChildComponent).vm.$emit('custom')
    // wrapper.findComponent(ChildComponent).vm.customFun(true);

    await wrapper.vm.$nextTick()

    console.log('wrapper.html(): ', wrapper.html())
    expect(wrapper.html()).toContain('Emitted!')
  })
 })