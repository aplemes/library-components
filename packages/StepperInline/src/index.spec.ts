import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepperInline from './index.vue'

const steps = [
  { label: 'Personal Info' },
  { label: 'Address' },
  { label: 'Payment' },
]

describe('StepperInline', () => {
  it('renders', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 1 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders correct number of steps', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-inline__item').length).toBe(3)
  })

  it('marks completed steps', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 3 } })
    expect(wrapper.findAll('.stepper-inline__item')[0].classes()).toContain('stepper-inline__item--completed')
    expect(wrapper.findAll('.stepper-inline__item')[1].classes()).toContain('stepper-inline__item--completed')
  })

  it('current step circle has current class', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 2 } })
    expect(wrapper.findAll('.stepper-inline__circle')[0].classes()).toContain('stepper-inline__circle--current')
  })

  it('shows check for completed steps', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 3 } })
    expect(wrapper.findAll('.stepper-inline__check').length).toBe(2)
  })

  it('renders step labels', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-inline__label')[0].text()).toBe('Personal Info')
  })

  it('shows separators between steps', () => {
    const wrapper = mount(StepperInline, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-inline__separator').length).toBe(2) // n-1 separators
  })
})
