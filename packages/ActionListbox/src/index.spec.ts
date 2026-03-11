import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActionListbox from './index.vue'

const items = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'delete', label: 'Delete', disabled: true },
]

describe('ActionListbox', () => {
  it('renders', () => {
    const wrapper = mount(ActionListbox, { props: { items } })
    expect(wrapper.exists()).toBe(true)
  })

  it('dropdown is hidden by default', () => {
    const wrapper = mount(ActionListbox, { props: { items } })
    expect(wrapper.find('.action-listbox__dropdown').exists()).toBe(false)
  })

  it('dropdown opens after clicking activator', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    expect(wrapper.find('.action-listbox__dropdown').exists()).toBe(true)
  })

  it('emits action when clicking an enabled item', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    await wrapper.findAll('.action-listbox__button')[0].trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
    expect(wrapper.emitted('action')![0]).toEqual(['edit'])
  })

  it('emits close after clicking an enabled item', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    await wrapper.findAll('.action-listbox__button')[0].trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('dropdown closes after item click', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    await wrapper.findAll('.action-listbox__button')[0].trigger('click')
    expect(wrapper.find('.action-listbox__dropdown').exists()).toBe(false)
  })

  it('does not emit action for disabled item', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    await wrapper.findAll('.action-listbox__button')[2].trigger('click')
    expect(wrapper.emitted('action')).toBeFalsy()
  })

  it('renders title when provided', async () => {
    const wrapper = mount(ActionListbox, {
      props: { items, title: 'Actions' },
      slots: { activator: '<button>Open</button>' }
    })
    await wrapper.find('.action-listbox__activator').trigger('click')
    expect(wrapper.find('.action-listbox__title').text()).toBe('Actions')
  })

  it('applies position class', () => {
    const wrapper = mount(ActionListbox, { props: { items, position: 'top-left' } })
    expect(wrapper.find('.action-listbox').classes()).toContain('action-listbox--top-left')
  })
})
