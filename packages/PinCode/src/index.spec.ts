import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PinCode from './index.vue'

describe('PinCode', () => {
  it('renders the correct number of inputs (default 4)', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1' } })
    expect(wrapper.findAll('input')).toHaveLength(4)
  })

  it('renders 6 inputs when length is 6', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1', length: 6 } })
    expect(wrapper.findAll('input')).toHaveLength(6)
  })

  it('populates digits from modelValue', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1', modelValue: '1234' } })
    const inputs = wrapper.findAll('input')
    expect((inputs[0].element as HTMLInputElement).value).toBe('1')
    expect((inputs[1].element as HTMLInputElement).value).toBe('2')
    expect((inputs[2].element as HTMLInputElement).value).toBe('3')
    expect((inputs[3].element as HTMLInputElement).value).toBe('4')
  })

  it('emits update:modelValue on digit input', async () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1' } })
    const input = wrapper.findAll('input')[0]
    await input.setValue('5')
    await input.trigger('input')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
  })

  it('applies invalid class to each input when isInvalid', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1', isInvalid: true } })
    const inputs = wrapper.findAll('input')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('pin-code__input--invalid')
    })
  })

  it('disables all inputs when disabled is true', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1', disabled: true } })
    wrapper.findAll('input').forEach((input) => {
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  it('sets readonly on all inputs', () => {
    const wrapper = mount(PinCode, { props: { id: 'pin1', readonly: true } })
    wrapper.findAll('input').forEach((input) => {
      expect(input.attributes('readonly')).toBeDefined()
    })
  })
})
