import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './index.vue'

describe('Input', () => {
  it('renders the label', () => {
    const wrapper = mount(Input, { props: { label: 'Email', id: 'email' } })
    expect(wrapper.find('label').text()).toBe('Email')
  })

  it('associates label with input via id', () => {
    const wrapper = mount(Input, { props: { label: 'Email', id: 'email' } })
    expect(wrapper.find('label').attributes('for')).toBe('email')
    expect(wrapper.find('input').attributes('id')).toBe('email')
  })

  it('renders the modelValue', () => {
    const wrapper = mount(Input, { props: { modelValue: 'hello' } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('hello')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Input, { props: { modelValue: '' } })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })

  it('disables the input when disabled is true', () => {
    const wrapper = mount(Input, { props: { disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('does not disable the input by default', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('displays error message when error prop is set', () => {
    const wrapper = mount(Input, { props: { error: 'This field is required' } })
    expect(wrapper.find('.input__error').text()).toBe('This field is required')
  })

  it('does not render error element when no error', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('.input__error').exists()).toBe(false)
  })

  it('applies invalid class when error is set', () => {
    const wrapper = mount(Input, { props: { error: 'Invalid' } })
    expect(wrapper.find('input').classes()).toContain('input__control--invalid')
  })

  it('sets aria-invalid when error is set', () => {
    const wrapper = mount(Input, { props: { error: 'Invalid' } })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('sets placeholder attribute', () => {
    const wrapper = mount(Input, { props: { placeholder: 'Enter text...' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text...')
  })

  it('sets type attribute', () => {
    const wrapper = mount(Input, { props: { type: 'email' } })
    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('defaults to type text', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('applies small size class when size is s', () => {
    const wrapper = mount(Input, { props: { size: 's' } })
    expect(wrapper.find('input').classes()).toContain('input__control--s')
  })

  it('does not apply size class for medium (default)', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').classes()).not.toContain('input__control--s')
  })

  it('renders prefix when set', () => {
    const wrapper = mount(Input, { props: { prefix: 'https://' } })
    expect(wrapper.find('.input__addon').text()).toBe('https://')
  })

  it('renders suffix when set', () => {
    const wrapper = mount(Input, { props: { suffix: '.com' } })
    expect(wrapper.find('.input__addon').text()).toBe('.com')
  })

  it('sets readonly attribute', () => {
    const wrapper = mount(Input, { props: { readonly: true } })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('renders icon slot when provided', () => {
    const wrapper = mount(Input, { slots: { icon: '<svg data-testid="icon" />' } })
    expect(wrapper.find('.input__icon').exists()).toBe(true)
  })

  it('does not render clear button when isClearable is false', () => {
    const wrapper = mount(Input, { props: { modelValue: 'hello' } })
    expect(wrapper.find('.input__clear').exists()).toBe(false)
  })

  it('does not render clear button when isClearable is true but modelValue is empty', () => {
    const wrapper = mount(Input, { props: { isClearable: true, modelValue: '' } })
    expect(wrapper.find('.input__clear').exists()).toBe(false)
  })

  it('renders clear button when isClearable is true and modelValue is set', () => {
    const wrapper = mount(Input, { props: { isClearable: true, modelValue: 'hello' } })
    expect(wrapper.find('.input__clear').exists()).toBe(true)
  })

  it('clear button has aria-label from clearLabel prop', () => {
    const wrapper = mount(Input, { props: { isClearable: true, modelValue: 'hello', clearLabel: 'Remove' } })
    expect(wrapper.find('.input__clear').attributes('aria-label')).toBe('Remove')
  })

  it('clear button defaults aria-label to Clear', () => {
    const wrapper = mount(Input, { props: { isClearable: true, modelValue: 'hello' } })
    expect(wrapper.find('.input__clear').attributes('aria-label')).toBe('Clear')
  })

  it('emits update:modelValue with empty string when clear button is clicked', async () => {
    const wrapper = mount(Input, { props: { isClearable: true, modelValue: 'hello' } })
    await wrapper.find('.input__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([''])
  })
})
