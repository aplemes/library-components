import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders default label text when no slot provided', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toBe('Clica aqui v.1.3.0')
  })

  it('is a button element', () => {
    const wrapper = mount(Button)
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
  })

  it('has btn class by default', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('btn')
  })

  it('does not apply standard variant class by default', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('btn--standard')
  })

  it('applies ghost class when ghost prop is true', () => {
    const wrapper = mount(Button, { props: { ghost: true } })
    expect(wrapper.classes()).toContain('btn--ghost')
  })

  it('applies outlined class when outlined prop is true', () => {
    const wrapper = mount(Button, { props: { outlined: true } })
    expect(wrapper.classes()).toContain('btn--outlined')
  })

  it('is disabled when the disabled prop is true', () => {
    const wrapper = mount(Button, { props: { disabled: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('applies size class for small', () => {
    const wrapper = mount(Button, { props: { size: 's' } })
    expect(wrapper.classes()).toContain('btn--s')
  })

  it('applies size class for large', () => {
    const wrapper = mount(Button, { props: { size: 'l' } })
    expect(wrapper.classes()).toContain('btn--l')
  })

  it('does not apply size class for medium (default)', () => {
    const wrapper = mount(Button, { props: { size: 'm' } })
    expect(wrapper.classes()).not.toContain('btn--m')
  })

  it('applies appearance danger class', () => {
    const wrapper = mount(Button, { props: { appearance: 'danger' } })
    expect(wrapper.classes()).toContain('btn--danger')
  })

  it('applies appearance accent class', () => {
    const wrapper = mount(Button, { props: { appearance: 'accent' } })
    expect(wrapper.classes()).toContain('btn--accent')
  })

  it('applies appearance inverse class', () => {
    const wrapper = mount(Button, { props: { appearance: 'inverse' } })
    expect(wrapper.classes()).toContain('btn--inverse')
  })

  it('applies icon-only class when iconPosition is only', () => {
    const wrapper = mount(Button, { props: { iconPosition: 'only' } })
    expect(wrapper.classes()).toContain('btn--icon-only')
  })

  it('renders loading spinner when isLoading is true', () => {
    const wrapper = mount(Button, { props: { isLoading: true } })
    expect(wrapper.find('.btn__spinner').exists()).toBe(true)
  })

  it('sets button type attribute', () => {
    const wrapper = mount(Button, { props: { type: 'submit' } })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('has default type button', () => {
    const wrapper = mount(Button)
    expect(wrapper.attributes('type')).toBe('button')
  })
})
