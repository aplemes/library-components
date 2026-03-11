import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from './index.vue'

describe('Avatar', () => {
  it('renders a span with avatar class', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('.avatar').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mount(Avatar, { slots: { default: 'AB' } })
    expect(wrapper.text()).toBe('AB')
  })

  it('does not apply size class for default size s', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('.avatar').classes()).not.toContain('avatar--s')
  })

  it('applies size class for medium', () => {
    const wrapper = mount(Avatar, { props: { size: 'm' } })
    expect(wrapper.find('.avatar').classes()).toContain('avatar--m')
  })

  it('applies size class for large', () => {
    const wrapper = mount(Avatar, { props: { size: 'l' } })
    expect(wrapper.find('.avatar').classes()).toContain('avatar--l')
  })
})
