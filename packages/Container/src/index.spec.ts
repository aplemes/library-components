import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Container from './index.vue'

describe('Container', () => {
  it('renders', () => {
    const wrapper = mount(Container)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(Container, {
      slots: { default: '<p class="content">Hello</p>' },
    })
    expect(wrapper.find('.content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Hello')
  })

  it('has base container class', () => {
    const wrapper = mount(Container)
    expect(wrapper.classes()).toContain('layout-container')
  })

  it('does not have fluid class by default', () => {
    const wrapper = mount(Container)
    expect(wrapper.classes()).not.toContain('layout-container--fluid')
  })

  it('applies fluid class when fluid prop is true', () => {
    const wrapper = mount(Container, { props: { fluid: true } })
    expect(wrapper.classes()).toContain('layout-container--fluid')
  })

  it('does not apply fluid class when fluid prop is false', () => {
    const wrapper = mount(Container, { props: { fluid: false } })
    expect(wrapper.classes()).not.toContain('layout-container--fluid')
  })
})
