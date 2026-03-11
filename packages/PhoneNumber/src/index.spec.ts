import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PhoneNumber from './index.vue'

describe('PhoneNumber', () => {
  it('renders a select and a text input', () => {
    const wrapper = mount(PhoneNumber)
    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('input[type="tel"]').exists()).toBe(true)
  })

  it('defaults to Portugal country', () => {
    const wrapper = mount(PhoneNumber, { props: { defaultCountry: 'PT' } })
    expect(wrapper.find('.phone-number__prefix').text()).toBe('+351')
  })

  it('shows Spanish prefix when defaultCountry is ES', () => {
    const wrapper = mount(PhoneNumber, { props: { defaultCountry: 'ES' } })
    expect(wrapper.find('.phone-number__prefix').text()).toBe('+34')
  })

  it('emits update:modelValue on phone input', async () => {
    const wrapper = mount(PhoneNumber, { props: { defaultCountry: 'PT' } })
    const input = wrapper.find('input[type="tel"]')
    await input.setValue('912345678')
    await input.trigger('input')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect((emitted?.[0]?.[0] as string)).toContain('351')
  })

  it('emits valid event on input', async () => {
    const wrapper = mount(PhoneNumber, { props: { defaultCountry: 'PT' } })
    const input = wrapper.find('input[type="tel"]')
    await input.setValue('912345678')
    await input.trigger('input')
    expect(wrapper.emitted('valid')).toBeTruthy()
  })

  it('applies invalid class when isInvalid is true', () => {
    const wrapper = mount(PhoneNumber, { props: { isInvalid: true } })
    expect(wrapper.find('.phone-number__input-wrapper').classes()).toContain(
      'phone-number__input--invalid'
    )
  })

  it('disables select and input when disabled', () => {
    const wrapper = mount(PhoneNumber, { props: { disabled: true } })
    expect(wrapper.find('select').attributes('disabled')).toBeDefined()
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('updates prefix when country changes', async () => {
    const wrapper = mount(PhoneNumber, { props: { defaultCountry: 'PT' } })
    const select = wrapper.find('select')
    await select.setValue('FR')
    await select.trigger('change')
    expect(wrapper.find('.phone-number__prefix').text()).toBe('+33')
  })
})
