import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Toggle from './index.vue'

describe('Toggle', () => {
  it('renders a checkbox input', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1' } })
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('sets the id attribute', () => {
    const wrapper = mount(Toggle, { props: { id: 'my-toggle' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-toggle')
  })

  it('renders the label when provided', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', label: 'Enable feature' } })
    expect(wrapper.find('.toggle__label').text()).toBe('Enable feature')
  })

  it('does not render label when not provided', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1' } })
    expect(wrapper.find('.toggle__label').exists()).toBe(false)
  })

  it('reflects modelValue as checked', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', modelValue: true } })
    expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', modelValue: false } })
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true])
  })

  it('disables the input when disabled is true', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('does not apply size class for default size s', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1' } })
    expect(wrapper.find('.toggle').classes()).not.toContain('toggle--s')
  })

  it('applies size class for m', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', size: 'm' } })
    expect(wrapper.find('.toggle').classes()).toContain('toggle--m')
  })

  it('renders toggle track and thumb', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1' } })
    expect(wrapper.find('.toggle__track').exists()).toBe(true)
    expect(wrapper.find('.toggle__thumb').exists()).toBe(true)
  })

  it('sets name attribute', () => {
    const wrapper = mount(Toggle, { props: { id: 'tog-1', name: 'notifications' } })
    expect(wrapper.find('input').attributes('name')).toBe('notifications')
  })
})
