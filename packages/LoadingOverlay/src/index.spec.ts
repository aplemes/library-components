import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoadingOverlay from './index.vue'

describe('LoadingOverlay', () => {
  it('renders', () => {
    const wrapper = mount(LoadingOverlay, {
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('overlay is not visible when isVisible is false', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: false },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay').exists()).toBe(false)
  })

  it('overlay is visible when isVisible is true', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: true },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay').exists()).toBe(true)
  })

  it('renders spinner when visible', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: true },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay__spinner').exists()).toBe(true)
  })

  it('renders text when provided and visible', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: true, text: 'Loading data...' },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay__text').text()).toBe('Loading data...')
  })

  it('does not render text when not provided', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: true },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay__text').exists()).toBe(false)
  })

  it('has dialog role when visible', () => {
    const wrapper = mount(LoadingOverlay, {
      props: { isVisible: true },
      global: { stubs: { Teleport: true } }
    })
    expect(wrapper.find('.loading-overlay').attributes('role')).toBe('dialog')
  })
})
