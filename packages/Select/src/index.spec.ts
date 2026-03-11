import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from './index.vue'

const defaultOptions = [
  { text: 'Option 1', value: 'opt1' },
  { text: 'Option 2', value: 'opt2' },
  { text: 'Option 3', value: 'opt3', disabled: true },
]

describe('Select', () => {
  it('renders a select element', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions } })
    expect(wrapper.find('select').exists()).toBe(true)
  })

  it('sets the id attribute', () => {
    const wrapper = mount(Select, { props: { id: 'my-select', options: defaultOptions } })
    expect(wrapper.find('select').attributes('id')).toBe('my-select')
  })

  it('renders all options', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions } })
    expect(wrapper.findAll('option').length).toBe(3)
  })

  it('renders a placeholder option when provided', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, placeholder: 'Choose one' } })
    expect(wrapper.findAll('option').length).toBe(4)
    expect(wrapper.findAll('option')[0].text()).toContain('Choose one')
  })

  it('reflects modelValue as selected', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, modelValue: 'opt2' } })
    expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('opt2')
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions } })
    await wrapper.find('select').setValue('opt1')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['opt1'])
  })

  it('disables the select when disabled is true', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, disabled: true } })
    expect(wrapper.find('select').attributes('disabled')).toBeDefined()
  })

  it('applies invalid class when isInvalid', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, isInvalid: true } })
    expect(wrapper.find('select').classes()).toContain('select__control--invalid')
  })

  it('applies size class for small', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, size: 's' } })
    expect(wrapper.find('.select').classes()).toContain('select--s')
  })

  it('does not apply size class for default m', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions } })
    expect(wrapper.find('.select').classes()).not.toContain('select--m')
  })

  it('disables the correct option', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions } })
    const options = wrapper.findAll('option')
    expect(options[2].attributes('disabled')).toBeDefined()
  })

  it('applies readonly class when readonly', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, readonly: true } })
    expect(wrapper.find('select').classes()).toContain('select__control--readonly')
  })

  it('sets name attribute', () => {
    const wrapper = mount(Select, { props: { id: 'sel-1', options: defaultOptions, name: 'country' } })
    expect(wrapper.find('select').attributes('name')).toBe('country')
  })
})
