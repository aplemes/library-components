import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import QuantitySelector from './index.vue'

describe('QuantitySelector', () => {
  it('renders an input of type number', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1' } })
    expect(wrapper.find('input[type="number"]').exists()).toBe(true)
  })
  it('sets the id', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'my-qty' } })
    expect(wrapper.find('input').attributes('id')).toBe('my-qty')
  })
  it('defaults to value 1', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1' } })
    expect(String((wrapper.find('input').element as HTMLInputElement).value)).toBe('1')
  })
  it('reflects modelValue', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', modelValue: 5 } })
    expect(String((wrapper.find('input').element as HTMLInputElement).value)).toBe('5')
  })
  it('renders increment and decrement buttons', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1' } })
    expect(wrapper.find('.qty-selector__btn--inc').exists()).toBe(true)
    expect(wrapper.find('.qty-selector__btn--dec').exists()).toBe(true)
  })
  it('emits update:modelValue when increment is clicked', async () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', modelValue: 3 } })
    await wrapper.find('.qty-selector__btn--inc').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([4])
  })
  it('emits update:modelValue when decrement is clicked', async () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', modelValue: 5, min: 1 } })
    await wrapper.find('.qty-selector__btn--dec').trigger('click')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([4])
  })
  it('decrement button is disabled at min value', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', modelValue: 1, min: 1 } })
    expect(wrapper.find('.qty-selector__btn--dec').attributes('disabled')).toBeDefined()
  })
  it('increment button is disabled at max value', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', modelValue: 10, max: 10 } })
    expect(wrapper.find('.qty-selector__btn--inc').attributes('disabled')).toBeDefined()
  })
  it('disables all controls when disabled', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })
  it('applies invalid class', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', isInvalid: true } })
    expect(wrapper.find('.qty-selector').classes()).toContain('qty-selector--invalid')
  })
  it('applies size class for s', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', size: 's' } })
    expect(wrapper.find('.qty-selector').classes()).toContain('qty-selector--s')
  })
  it('does not render buttons when readonly', () => {
    const wrapper = mount(QuantitySelector, { props: { id: 'qty-1', readonly: true } })
    expect(wrapper.find('.qty-selector__btn--inc').exists()).toBe(false)
    expect(wrapper.find('.qty-selector__btn--dec').exists()).toBe(false)
  })
})
