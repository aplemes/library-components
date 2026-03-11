import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconButton from './index.vue'

describe('IconButton', () => {
  it('renders a button element', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('applies icon-btn class', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('.icon-btn').exists()).toBe(true)
  })

  it('defaults to type button', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('button').attributes('type')).toBe('button')
  })

  it('sets type attribute', () => {
    const wrapper = mount(IconButton, { props: { type: 'submit' } })
    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('disables the button when disabled is true', () => {
    const wrapper = mount(IconButton, { props: { disabled: true } })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('does not disable by default', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  })

  it('emits click event', async () => {
    const wrapper = mount(IconButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(IconButton, { props: { disabled: true } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies size class for s', () => {
    const wrapper = mount(IconButton, { props: { size: 's' } })
    expect(wrapper.find('.icon-btn').classes()).toContain('icon-btn--s')
  })

  it('does not apply size class for default m', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('.icon-btn').classes()).not.toContain('icon-btn--m')
  })

  it('applies appearance class for non-standard', () => {
    const wrapper = mount(IconButton, { props: { appearance: 'danger' } })
    expect(wrapper.find('.icon-btn').classes()).toContain('icon-btn--danger')
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.find('.icon-btn').classes()).not.toContain('icon-btn--standard')
  })

  it('applies ghost class', () => {
    const wrapper = mount(IconButton, { props: { ghost: true } })
    expect(wrapper.find('.icon-btn').classes()).toContain('icon-btn--ghost')
  })

  it('applies outlined class', () => {
    const wrapper = mount(IconButton, { props: { outlined: true } })
    expect(wrapper.find('.icon-btn').classes()).toContain('icon-btn--outlined')
  })

  it('shows spinner and disables when isLoading is true', () => {
    const wrapper = mount(IconButton, { props: { isLoading: true } })
    expect(wrapper.find('.icon-btn__spinner').exists()).toBe(true)
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('renders icon slot', () => {
    const wrapper = mount(IconButton, { slots: { icon: '<svg data-testid="icon" />' } })
    expect(wrapper.find('.icon-btn__icon').exists()).toBe(true)
  })

  it('sets aria-label attribute', () => {
    const wrapper = mount(IconButton, { props: { ariaLabel: 'Close' } })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Close')
  })
})
