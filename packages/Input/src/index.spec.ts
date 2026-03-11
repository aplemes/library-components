import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './index.vue'

describe('Input', () => {
  it('renders the input element', () => {
    const wrapper = mount(Input, { props: { id: 'email' } })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('sets the id on the input', () => {
    const wrapper = mount(Input, { props: { id: 'email' } })
    expect(wrapper.find('input').attributes('id')).toBe('email')
  })

  it('renders the modelValue', () => {
    const wrapper = mount(Input, { props: { id: 'test', modelValue: 'hello' } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('hello')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Input, { props: { id: 'test', modelValue: '' } })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
  })

  it('disables the input when disabled is true', () => {
    const wrapper = mount(Input, { props: { id: 'test', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('does not disable the input by default', () => {
    const wrapper = mount(Input, { props: { id: 'test' } })
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
  })

  it('applies is-invalid class when isInvalid is set', () => {
    const wrapper = mount(Input, { props: { id: 'test', isInvalid: true } })
    expect(wrapper.find('.input').classes()).toContain('is-invalid')
  })

  it('does not apply invalid class when no error', () => {
    const wrapper = mount(Input, { props: { id: 'test' } })
    expect(wrapper.find('.input').classes()).not.toContain('is-invalid')
  })

  it('sets aria-invalid when isInvalid is set', () => {
    const wrapper = mount(Input, { props: { id: 'test', isInvalid: true } })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('sets placeholder attribute', () => {
    const wrapper = mount(Input, { props: { id: 'test', placeholder: 'Enter text...' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text...')
  })

  it('sets inputType attribute', () => {
    const wrapper = mount(Input, { props: { id: 'test', inputType: 'email' } })
    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('defaults to type text', () => {
    const wrapper = mount(Input, { props: { id: 'test' } })
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('applies small size class when size is s', () => {
    const wrapper = mount(Input, { props: { id: 'test', size: 's' } })
    expect(wrapper.find('.input').classes()).toContain('input--s')
  })

  it('does not apply size class for medium (default)', () => {
    const wrapper = mount(Input, { props: { id: 'test' } })
    expect(wrapper.find('.input').classes()).not.toContain('input--s')
  })

  it('renders prefix when set', () => {
    const wrapper = mount(Input, { props: { id: 'test', prefix: 'https://' } })
    expect(wrapper.find('.input__addon').text()).toBe('https://')
  })

  it('renders suffix when set', () => {
    const wrapper = mount(Input, { props: { id: 'test', suffix: '.com' } })
    expect(wrapper.find('.input__addon').text()).toBe('.com')
  })

  it('sets readonly attribute', () => {
    const wrapper = mount(Input, { props: { id: 'test', readonly: true } })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('renders icon slot when provided', () => {
    const wrapper = mount(Input, { props: { id: 'test' }, slots: { icon: '<svg data-testid="icon" />' } })
    expect(wrapper.find('.input__icon').exists()).toBe(true)
  })

  it('does not render clear button when isClearable is false', () => {
    const wrapper = mount(Input, { props: { id: 'test', modelValue: 'hello' } })
    expect(wrapper.find('.input__clear-btn').exists()).toBe(false)
  })

  it('does not render clear button when isClearable is true but modelValue is empty', () => {
    const wrapper = mount(Input, { props: { id: 'test', isClearable: true, modelValue: '' } })
    expect(wrapper.find('.input__clear-btn').exists()).toBe(false)
  })

  it('renders clear button when isClearable is true and modelValue is set', () => {
    const wrapper = mount(Input, { props: { id: 'test', isClearable: true, modelValue: 'hello' } })
    expect(wrapper.find('.input__clear-btn').exists()).toBe(true)
  })

  it('emits update:modelValue with empty string when clear button is clicked', async () => {
    const wrapper = mount(Input, { props: { id: 'test', isClearable: true, modelValue: 'hello' } })
    await wrapper.find('.input__clear-btn').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([''])
  })
})
