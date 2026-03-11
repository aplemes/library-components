import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from './index.vue'

describe('Checkbox', () => {
  it('renders an input of type checkbox', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1' } })
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('sets the id attribute', () => {
    const wrapper = mount(Checkbox, { props: { id: 'my-cb' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-cb')
  })

  it('renders the label when provided', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', label: 'Accept terms' } })
    expect(wrapper.find('label').text()).toBe('Accept terms')
  })

  it('associates label with input via id', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', label: 'Accept' } })
    expect(wrapper.find('label').attributes('for')).toBe('cb-1')
  })

  it('does not render label when not provided', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1' } })
    expect(wrapper.find('label').exists()).toBe(false)
  })

  it('reflects modelValue as checked', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', modelValue: true } })
    expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', modelValue: false } })
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true])
  })

  it('disables the input when disabled is true', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('sets aria-invalid when isInvalid is true', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', isInvalid: true } })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('applies invalid class when isInvalid', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', isInvalid: true } })
    expect(wrapper.find('input').classes()).toContain('checkbox__input--invalid')
  })

  it('applies indented class when indented', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', indented: true } })
    expect(wrapper.find('.checkbox').classes()).toContain('checkbox--indented')
  })

  it('sets name attribute', () => {
    const wrapper = mount(Checkbox, { props: { id: 'cb-1', name: 'preferences' } })
    expect(wrapper.find('input').attributes('name')).toBe('preferences')
  })
})
