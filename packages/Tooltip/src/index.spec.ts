import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './index.vue'

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip-1', text: 'Tooltip text' } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the trigger slot', () => {
    const wrapper = mount(Tooltip, {
      props: { id: 'tip-1', text: 'Tooltip text' },
      slots: { default: '<button>Hover me</button>' }
    })
    expect(wrapper.find('button').text()).toBe('Hover me')
  })

  it('tooltip text is present in DOM', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip-1', text: 'Helpful tooltip message' } })
    expect(wrapper.find('.tooltip__content').text()).toBe('Helpful tooltip message')
  })

  it('tooltip has correct id', () => {
    const wrapper = mount(Tooltip, { props: { id: 'my-tooltip', text: 'Text' } })
    expect(wrapper.find('.tooltip__content').attributes('id')).toBe('my-tooltip')
  })

  it('wrapper has aria-describedby pointing to tooltip id', () => {
    const wrapper = mount(Tooltip, { props: { id: 'my-tooltip', text: 'Text' } })
    expect(wrapper.find('.tooltip').attributes('aria-describedby')).toBe('my-tooltip')
  })

  it('applies position class', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip', text: 'Text', position: 'bottom' } })
    expect(wrapper.find('.tooltip').classes()).toContain('tooltip--bottom')
  })

  it('applies no-pointer class when pointer is false', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip', text: 'Text', pointer: false } })
    expect(wrapper.find('.tooltip').classes()).toContain('tooltip--no-pointer')
  })

  it('applies standalone class when standalone is true', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip', text: 'Text', standalone: true } })
    expect(wrapper.find('.tooltip').classes()).toContain('tooltip--standalone')
  })

  it('tooltip role is tooltip', () => {
    const wrapper = mount(Tooltip, { props: { id: 'tip', text: 'Text' } })
    expect(wrapper.find('.tooltip__content').attributes('role')).toBe('tooltip')
  })
})
