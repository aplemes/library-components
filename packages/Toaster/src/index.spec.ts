import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Toaster from './index.vue'

describe('Toaster', () => {
  it('shows toast when open is true', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Hello!' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.text()).toContain('Hello!')
  })

  it('does not render when open is false', () => {
    const wrapper = mount(Toaster, {
      props: { open: false, description: 'Hello!' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster').exists()).toBe(false)
  })

  it('renders close button when closable is true', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast message', closable: true },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster__close').exists()).toBe(true)
  })

  it('does not render close button when closable is false', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast message', closable: false },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster__close').exists()).toBe(false)
  })

  it('emits update:open false when close button is clicked', async () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast message' },
      global: { stubs: { Teleport: true } },
    })
    await wrapper.find('.toaster__close').trigger('click')
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
  })

  it('applies status class', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Success!', status: 'success' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster--success').exists()).toBe(true)
  })

  it('applies position class', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast', position: 'bottom-left' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster--bottom-left').exists()).toBe(true)
  })

  it('renders progress bar when progress prop is true', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast', progress: true, timeout: 0 },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster__progress').exists()).toBe(true)
  })

  it('renders action slot', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Toast' },
      slots: { action: '<button>Undo</button>' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.text()).toContain('Undo')
  })

  it('renders description text', () => {
    const wrapper = mount(Toaster, {
      props: { open: true, description: 'Your file has been saved.' },
      global: { stubs: { Teleport: true } },
    })
    expect(wrapper.find('.toaster__description').text()).toBe('Your file has been saved.')
  })
})
