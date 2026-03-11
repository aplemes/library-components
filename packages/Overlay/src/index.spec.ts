import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Overlay from './index.vue'

describe('Overlay', () => {
  it('renders with overlay class', () => {
    const wrapper = mount(Overlay)
    expect(wrapper.find('.overlay').exists()).toBe(true)
  })

  it('does not have is-visible class by default', () => {
    const wrapper = mount(Overlay)
    expect(wrapper.find('.overlay').classes()).not.toContain('is-visible')
  })

  it('applies is-visible class when isVisible is true', () => {
    const wrapper = mount(Overlay, { props: { isVisible: true } })
    expect(wrapper.find('.overlay').classes()).toContain('is-visible')
  })

  it('renders slot content', () => {
    const wrapper = mount(Overlay, { slots: { default: '<div class="test-content">Content</div>' } })
    expect(wrapper.find('.test-content').exists()).toBe(true)
  })

  it('has dialog role on content element', () => {
    const wrapper = mount(Overlay)
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
  })

  it('sets aria-labelledby when dialogLabel is provided', () => {
    const wrapper = mount(Overlay, { props: { dialogLabel: 'myTitle' } })
    expect(wrapper.find('[role="dialog"]').attributes('aria-labelledby')).toBe('myTitle')
  })
})
