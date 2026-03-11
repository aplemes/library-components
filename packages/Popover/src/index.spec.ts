import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Popover from './index.vue'

describe('Popover', () => {
  it('renders', () => {
    const wrapper = mount(Popover)
    expect(wrapper.exists()).toBe(true)
  })

  it('popover panel is hidden by default', () => {
    const wrapper = mount(Popover)
    expect(wrapper.find('.popover').exists()).toBe(false)
  })

  it('popover opens after clicking activator', async () => {
    const wrapper = mount(Popover, {
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover').exists()).toBe(true)
  })

  it('popover closes on second click', async () => {
    const wrapper = mount(Popover, {
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover').exists()).toBe(false)
  })

  it('renders close button when closable is true', async () => {
    const wrapper = mount(Popover, {
      props: { closable: true },
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover__close').exists()).toBe(true)
  })

  it('close button closes the popover', async () => {
    const wrapper = mount(Popover, {
      props: { closable: true },
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    await wrapper.find('.popover__close').trigger('click')
    expect(wrapper.find('.popover').exists()).toBe(false)
  })

  it('renders title when provided', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Popover Title' },
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover__title').text()).toBe('Popover Title')
  })

  it('renders default slot content', async () => {
    const wrapper = mount(Popover, {
      slots: {
        activator: '<button>Toggle</button>',
        default: '<p>Content here</p>'
      }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover__content').html()).toContain('Content here')
  })

  it('renders footer slot when provided', async () => {
    const wrapper = mount(Popover, {
      slots: {
        activator: '<button>Toggle</button>',
        footer: '<button>OK</button>'
      }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover__footer').exists()).toBe(true)
    expect(wrapper.find('.popover__footer').html()).toContain('OK')
  })

  it('applies position class', async () => {
    const wrapper = mount(Popover, {
      props: { position: 'top' },
      slots: { activator: '<button>Toggle</button>' }
    })
    await wrapper.find('.popover__activator').trigger('click')
    expect(wrapper.find('.popover').classes()).toContain('popover--top')
  })
})
