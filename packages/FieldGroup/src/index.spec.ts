import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldGroup from './index.vue'

describe('FieldGroup', () => {
  it('renders a fieldset element', () => {
    const wrapper = mount(FieldGroup, { props: { legend: 'Options' } })
    expect(wrapper.find('fieldset').exists()).toBe(true)
  })

  it('renders the legend', () => {
    const wrapper = mount(FieldGroup, { props: { legend: 'Payment Method' } })
    expect(wrapper.find('legend').text()).toContain('Payment Method')
  })

  it('renders requirementText when provided', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options', requirementText: 'required' },
    })
    expect(wrapper.text()).toContain('(required)')
  })

  it('renders helpText when provided', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options', helpText: 'Select one option' },
    })
    expect(wrapper.find('.field-group__help').text()).toBe('Select one option')
  })

  it('shows invalid message when isInvalid and message are set', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options', isInvalid: true, message: 'Please select an option' },
    })
    const msg = wrapper.find('.field-group__message')
    expect(msg.exists()).toBe(true)
    expect(msg.text()).toBe('Please select an option')
    expect(msg.classes()).toContain('field-group__message--invalid')
  })

  it('shows valid message when isValid and message are set', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options', isValid: true, message: 'Good choice!' },
    })
    const msg = wrapper.find('.field-group__message')
    expect(msg.exists()).toBe(true)
    expect(msg.classes()).toContain('field-group__message--valid')
  })

  it('does not show message without state', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options', message: 'Hidden' },
    })
    expect(wrapper.find('.field-group__message').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(FieldGroup, {
      props: { legend: 'Options' },
      slots: { default: '<div class="option-item">Option A</div>' },
    })
    expect(wrapper.find('.option-item').exists()).toBe(true)
  })
})
