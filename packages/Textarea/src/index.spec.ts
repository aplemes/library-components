import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Textarea from './index.vue'

describe('Textarea', () => {
  it('renders a textarea element', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1' } })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('sets the id attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'my-ta' } })
    expect(wrapper.find('textarea').attributes('id')).toBe('my-ta')
  })

  it('reflects the modelValue', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', modelValue: 'Hello World' } })
    expect((wrapper.find('textarea').element as HTMLTextAreaElement).value).toBe('Hello World')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', modelValue: '' } })
    await wrapper.find('textarea').setValue('new text')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new text'])
  })

  it('sets placeholder attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', placeholder: 'Enter text...' } })
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('Enter text...')
  })

  it('disables textarea when disabled is true', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', disabled: true } })
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
  })

  it('sets rows attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', rows: 5 } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('5')
  })

  it('defaults to rows 2', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1' } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('2')
  })

  it('sets readonly attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', readonly: true } })
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
  })

  it('sets maxlength attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', maxLength: 200 } })
    expect(wrapper.find('textarea').attributes('maxlength')).toBe('200')
  })

  it('sets minlength attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', minLength: 10 } })
    expect(wrapper.find('textarea').attributes('minlength')).toBe('10')
  })

  it('applies invalid class when isInvalid', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', isInvalid: true } })
    expect(wrapper.find('textarea').classes()).toContain('textarea--invalid')
  })

  it('does not apply invalid class by default', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1' } })
    expect(wrapper.find('textarea').classes()).not.toContain('textarea--invalid')
  })

  it('sets aria-invalid when isInvalid', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', isInvalid: true } })
    expect(wrapper.find('textarea').attributes('aria-invalid')).toBe('true')
  })

  it('sets name attribute', () => {
    const wrapper = mount(Textarea, { props: { id: 'ta-1', name: 'description' } })
    expect(wrapper.find('textarea').attributes('name')).toBe('description')
  })
})
