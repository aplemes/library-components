import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Callout from './index.vue'

describe('Callout', () => {
  it('renders title', () => {
    const wrapper = mount(Callout, {
      props: { title: 'My Title', description: 'My description' },
    })
    expect(wrapper.text()).toContain('My Title')
  })

  it('renders description', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'Important info here' },
    })
    expect(wrapper.text()).toContain('Important info here')
  })

  it('applies info appearance class by default', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc' },
    })
    expect(wrapper.classes()).toContain('callout--info')
  })

  it('applies warning appearance class', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc', appearance: 'warning' },
    })
    expect(wrapper.classes()).toContain('callout--warning')
  })

  it('applies success appearance class', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc', appearance: 'success' },
    })
    expect(wrapper.classes()).toContain('callout--success')
  })

  it('applies danger appearance class', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc', appearance: 'danger' },
    })
    expect(wrapper.classes()).toContain('callout--danger')
  })

  it('applies neutral appearance class', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc', appearance: 'neutral' },
    })
    expect(wrapper.classes()).toContain('callout--neutral')
  })

  it('renders icon slot', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc' },
      slots: { icon: '<span class="custom-icon">★</span>' },
    })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('renders footer slot', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc' },
      slots: { footer: '<button>Action</button>' },
    })
    expect(wrapper.find('.callout__footer').exists()).toBe(true)
    expect(wrapper.text()).toContain('Action')
  })

  it('does not render footer when slot is empty', () => {
    const wrapper = mount(Callout, {
      props: { title: 'Title', description: 'desc' },
    })
    expect(wrapper.find('.callout__footer').exists()).toBe(false)
  })
})
