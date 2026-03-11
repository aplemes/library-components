import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from './index.vue'

describe('Radio', () => {
  it('renders an input of type radio', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1' } })
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
  })

  it('sets the id attribute', () => {
    const wrapper = mount(Radio, { props: { id: 'my-radio' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-radio')
  })

  it('renders the label when provided', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', label: 'Option A' } })
    expect(wrapper.find('label').text()).toBe('Option A')
  })

  it('associates label with input via id', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', label: 'Option' } })
    expect(wrapper.find('label').attributes('for')).toBe('r-1')
  })

  it('does not render label when not provided', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1' } })
    expect(wrapper.find('label').exists()).toBe(false)
  })

  it('reflects modelValue as checked', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', modelValue: true } })
    expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', modelValue: false } })
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('disables the input when disabled is true', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('sets aria-invalid when isInvalid is true', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', isInvalid: true } })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('applies invalid class when isInvalid', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', isInvalid: true } })
    expect(wrapper.find('input').classes()).toContain('radio__input--invalid')
  })

  it('sets name attribute', () => {
    const wrapper = mount(Radio, { props: { id: 'r-1', name: 'choice' } })
    expect(wrapper.find('input').attributes('name')).toBe('choice')
  })
})
