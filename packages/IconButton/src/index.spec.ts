import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconButton from './index.vue'

describe('IconButton', () => {
  it('renders a button element', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg />' } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
  })

  it('has icon-btn class by default', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn')
  })

  it('has default type button', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg />' } })
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg />' } })
    expect(wrapper.classes()).not.toContain('icon-btn--standard')
  })

  it('applies appearance accent class', () => {
    const wrapper = mount(IconButton, { props: { appearance: 'accent' }, slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn--accent')
  })

  it('applies size class for small', () => {
    const wrapper = mount(IconButton, { props: { size: 's' }, slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn--s')
  })

  it('applies size class for large', () => {
    const wrapper = mount(IconButton, { props: { size: 'l' }, slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn--l')
  })

  it('does not apply size class for medium (default)', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg />' } })
    expect(wrapper.classes()).not.toContain('icon-btn--m')
  })

  it('disables the button when disabled is true', () => {
    const wrapper = mount(IconButton, { props: { disabled: true }, slots: { icon: '<svg />' } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('applies ghost class when ghost prop is true', () => {
    const wrapper = mount(IconButton, { props: { ghost: true }, slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn--ghost')
  })

  it('applies outlined class when outlined prop is true', () => {
    const wrapper = mount(IconButton, { props: { outlined: true }, slots: { icon: '<svg />' } })
    expect(wrapper.classes()).toContain('icon-btn--outlined')
  })

  it('renders spinner when isLoading is true', () => {
    const wrapper = mount(IconButton, { props: { isLoading: true }, slots: { icon: '<svg />' } })
    expect(wrapper.find('.icon-btn__spinner').exists()).toBe(true)
  })

  it('sets button type to submit', () => {
    const wrapper = mount(IconButton, { props: { type: 'submit' }, slots: { icon: '<svg />' } })
    expect(wrapper.attributes('type')).toBe('submit')
  })
})
