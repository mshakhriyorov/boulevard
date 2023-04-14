import test from 'ava'
import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/Main.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(NuxtLogo)
  t.truthy(wrapper.vm)
})
