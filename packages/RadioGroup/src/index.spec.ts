import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RadioGroup from './index.vue'

const defaultOptions = [
  { id: 'opt-1', label: 'Option 1', value: 'opt1' },
  { id: 'opt-2', label: 'Option 2', value: 'opt2' },
  { id: 'opt-3', label: 'Option 3', value: 'opt3', disabled: true },
]

describe('RadioGroup', () => {
  it('renders all options', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('input[type="radio"]').length).toBe(3)
  })

  it('renders labels for all options', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('label').length).toBe(3)
  })

  it('sets name attribute on all inputs', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'mygroup', options: defaultOptions } })
    wrapper.findAll('input').forEach(input => {
      expect(input.attributes('name')).toBe('mygroup')
    })
  })

  it('checks the input matching modelValue', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions, modelValue: 'opt2' } })
    const inputs = wrapper.findAll('input')
    expect((inputs[0].element as HTMLInputElement).checked).toBe(false)
    expect((inputs[1].element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue when radio changes', async () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions, modelValue: 'opt1' } })
    await wrapper.findAll('input')[1].setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('disables the correct option', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('input')[2].attributes('disabled')).toBeDefined()
  })

  it('applies invalid class on all inputs when isInvalid is true', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions, isInvalid: true } })
    wrapper.findAll('input').forEach(input => {
      expect(input.classes()).toContain('radio-group__input--invalid')
    })
  })

  it('applies inline class when inline prop is true', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions, inline: true } })
    expect(wrapper.find('.radio-group').classes()).toContain('radio-group--inline')
  })

  it('does not apply inline class by default', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.find('.radio-group').classes()).not.toContain('radio-group--inline')
  })

  it('associates each label with its input', () => {
    const wrapper = mount(RadioGroup, { props: { name: 'group', options: defaultOptions } })
    const labels = wrapper.findAll('label')
    expect(labels[0].attributes('for')).toBe('opt-1')
    expect(labels[1].attributes('for')).toBe('opt-2')
  })
})
