import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Field from './index.vue'

describe('Field', () => {
  it('renders the label', () => {
    const wrapper = mount(Field, { props: { id: 'input1', label: 'Email' } })
    expect(wrapper.find('label').text()).toContain('Email')
  })

  it('links label to input via id', () => {
    const wrapper = mount(Field, { props: { id: 'my-input', label: 'Name' } })
    expect(wrapper.find('label').attributes('for')).toBe('my-input')
  })

  it('renders requirementText when provided', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', requirementText: 'optional' },
    })
    expect(wrapper.text()).toContain('(optional)')
  })

  it('renders helpText when helpId and helpText are provided', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', helpId: 'help1', helpText: 'Some help' },
    })
    const help = wrapper.find('#help1')
    expect(help.exists()).toBe(true)
    expect(help.text()).toBe('Some help')
  })

  it('does not render helpText when helpId is missing', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', helpText: 'Some help' },
    })
    expect(wrapper.text()).not.toContain('Some help')
  })

  it('shows invalid message when isInvalid and message are set', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', isInvalid: true, message: 'Required field' },
    })
    const msg = wrapper.find('.field__message')
    expect(msg.exists()).toBe(true)
    expect(msg.text()).toContain('Required field')
    expect(msg.classes()).toContain('field__message--invalid')
  })

  it('shows valid message when isValid and message are set', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', isValid: true, message: 'Looks good!' },
    })
    const msg = wrapper.find('.field__message')
    expect(msg.exists()).toBe(true)
    expect(msg.classes()).toContain('field__message--valid')
  })

  it('shows loading spinner when isLoading and message are set', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', isLoading: true, message: 'Checking...' },
    })
    expect(wrapper.find('.field__spinner').exists()).toBe(true)
    expect(wrapper.find('.field__message').classes()).toContain('field__message--loading')
  })

  it('does not show message when no state is set', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name', message: 'Should not appear' },
    })
    expect(wrapper.find('.field__message').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(Field, {
      props: { id: 'f', label: 'Name' },
      slots: { default: '<input id="f" type="text" />' },
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
