import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DatePicker from './index.vue'

describe('DatePicker', () => {
  it('renders a date input', () => {
    const wrapper = mount(DatePicker, { props: { id: 'date1' } })
    expect(wrapper.find('input[type="date"]').exists()).toBe(true)
  })

  it('sets the id attribute on input', () => {
    const wrapper = mount(DatePicker, { props: { id: 'my-date' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-date')
  })

  it('sets the value from modelValue', () => {
    const wrapper = mount(DatePicker, {
      props: { id: 'date1', modelValue: '2024-01-15' },
    })
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('2024-01-15')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(DatePicker, { props: { id: 'date1' } })
    const input = wrapper.find('input')
    await input.setValue('2024-06-01')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2024-06-01'])
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(DatePicker, { props: { id: 'date1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies invalid class when isInvalid is true', () => {
    const wrapper = mount(DatePicker, { props: { id: 'date1', isInvalid: true } })
    expect(wrapper.classes()).toContain('date-picker--invalid')
  })

  it('shows clear button when isClearable and modelValue are set', () => {
    const wrapper = mount(DatePicker, {
      props: { id: 'date1', isClearable: true, modelValue: '2024-01-15' },
    })
    expect(wrapper.find('.date-picker__clear').exists()).toBe(true)
  })

  it('does not show clear button when modelValue is empty', () => {
    const wrapper = mount(DatePicker, {
      props: { id: 'date1', isClearable: true, modelValue: '' },
    })
    expect(wrapper.find('.date-picker__clear').exists()).toBe(false)
  })

  it('clears the value when clear button is clicked', async () => {
    const wrapper = mount(DatePicker, {
      props: { id: 'date1', isClearable: true, modelValue: '2024-01-15' },
    })
    await wrapper.find('.date-picker__clear-btn').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('applies small size class', () => {
    const wrapper = mount(DatePicker, { props: { id: 'date1', size: 's' } })
    expect(wrapper.classes()).toContain('date-picker--s')
  })
})
