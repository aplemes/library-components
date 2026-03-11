import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PasswordInput from './index.vue'

describe('PasswordInput', () => {
  it('renders an input element', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1' } })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('defaults to type password', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1' } })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('sets the id', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'my-pwd' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-pwd')
  })

  it('reflects modelValue', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', modelValue: 'secret' } })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('secret')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', modelValue: '' } })
    await wrapper.find('input').setValue('newpass')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['newpass'])
  })

  it('toggles type to text when toggle button is clicked', async () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1' } })
    await wrapper.find('.pwd-input__toggle').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('toggles back to password on second click', async () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1' } })
    await wrapper.find('.pwd-input__toggle').trigger('click')
    await wrapper.find('.pwd-input__toggle').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('shows clear button when isClearable and has value', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', modelValue: 'abc', isClearable: true } })
    expect(wrapper.find('.pwd-input__clear').exists()).toBe(true)
  })

  it('does not show clear button when no value', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', modelValue: '', isClearable: true } })
    expect(wrapper.find('.pwd-input__clear').exists()).toBe(false)
  })

  it('emits empty string when clear is clicked', async () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', modelValue: 'abc', isClearable: true } })
    await wrapper.find('.pwd-input__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([''])
  })

  it('disables input when disabled', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies is-invalid class when isInvalid', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', isInvalid: true } })
    expect(wrapper.find('.pwd-input').classes()).toContain('is-invalid')
  })

  it('sets aria-invalid when isInvalid', () => {
    const wrapper = mount(PasswordInput, { props: { id: 'pwd-1', isInvalid: true } })
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('uses custom buttonLabel for show/hide text', async () => {
    const wrapper = mount(PasswordInput, {
      props: {
        id: 'pwd-1',
        buttonLabel: { show: 'Ver', hide: 'Ocultar' }
      }
    })
    expect(wrapper.find('.pwd-input__toggle').text()).toBe('Ver')
    await wrapper.find('.pwd-input__toggle').trigger('click')
    expect(wrapper.find('.pwd-input__toggle').text()).toBe('Ocultar')
  })
})
