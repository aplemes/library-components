import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepperCompact from './index.vue'

describe('StepperCompact', () => {
  it('renders', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Step label', value: 1, maxSteps: 4 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders step label', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Personal Info', value: 1, maxSteps: 4 } })
    expect(wrapper.find('.stepper-compact__label').text()).toBe('Personal Info')
  })

  it('renders step indicator showing current/total', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Step', value: 2, maxSteps: 5 } })
    expect(wrapper.find('.stepper-compact__step-label').text()).toBe('2 / 5')
  })

  it('renders description when provided', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Step', description: 'Do this step', value: 1, maxSteps: 4 } })
    expect(wrapper.find('.stepper-compact__description').text()).toBe('Do this step')
  })

  it('does not render description when not provided', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Step', value: 1, maxSteps: 4 } })
    expect(wrapper.find('.stepper-compact__description').exists()).toBe(false)
  })

  it('renders progress ring', () => {
    const wrapper = mount(StepperCompact, { props: { label: 'Step', value: 1, maxSteps: 4 } })
    expect(wrapper.find('.stepper-compact__ring').exists()).toBe(true)
  })
})
