import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Overlay from './index.vue'

const mountOptions = {
  attachTo: document.body,
  global: { stubs: { Teleport: true } }
}

describe('Overlay', () => {
  it('renders with overlay class', () => {
    const wrapper = mount(Overlay, mountOptions)
    expect(wrapper.find('.overlay').exists()).toBe(true)
    wrapper.unmount()
  })
  it('does not have visible class by default', () => {
    const wrapper = mount(Overlay, mountOptions)
    expect(wrapper.find('.overlay').classes()).not.toContain('overlay--visible')
    wrapper.unmount()
  })
  it('applies visible class when isVisible is true', () => {
    const wrapper = mount(Overlay, { ...mountOptions, props: { isVisible: true } })
    expect(wrapper.find('.overlay').classes()).toContain('overlay--visible')
    wrapper.unmount()
  })
  it('renders slot content', () => {
    const wrapper = mount(Overlay, { ...mountOptions, slots: { default: '<div class="test-content">Content</div>' } })
    expect(wrapper.find('.test-content').exists()).toBe(true)
    wrapper.unmount()
  })
  it('emits click event when overlay background is clicked', async () => {
    const wrapper = mount(Overlay, { ...mountOptions, props: { isVisible: true } })
    await wrapper.find('.overlay').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    wrapper.unmount()
  })
  it('has dialog role on content element', () => {
    const wrapper = mount(Overlay, mountOptions)
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
    wrapper.unmount()
  })
})
