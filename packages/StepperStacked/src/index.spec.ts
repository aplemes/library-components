import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepperStacked from './index.vue'

const steps = [
  { label: 'Step One', description: 'First step description' },
  { label: 'Step Two' },
  { label: 'Step Three' },
]

describe('StepperStacked', () => {
  it('renders', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 1 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders correct number of steps', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-stacked__item').length).toBe(3)
  })

  it('marks current step', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 2 } })
    expect(wrapper.findAll('.stepper-stacked__item')[1].classes()).toContain('stepper-stacked__item--current')
  })

  it('marks completed steps', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 3 } })
    expect(wrapper.findAll('.stepper-stacked__item')[0].classes()).toContain('stepper-stacked__item--completed')
    expect(wrapper.findAll('.stepper-stacked__item')[1].classes()).toContain('stepper-stacked__item--completed')
  })

  it('shows check icon for completed steps', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 3 } })
    expect(wrapper.findAll('.stepper-stacked__check').length).toBe(2)
  })

  it('renders step labels', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-stacked__label')[0].text()).toBe('Step One')
  })

  it('renders description when provided', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 1 } })
    expect(wrapper.find('.stepper-stacked__description').text()).toBe('First step description')
  })

  it('does not render description when not provided', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.stepper-stacked__description').length).toBe(1)
  })

  it('current step label has current class', () => {
    const wrapper = mount(StepperStacked, { props: { steps, currentStep: 2 } })
    expect(wrapper.findAll('.stepper-stacked__label')[1].classes()).toContain('stepper-stacked__label--current')
  })
})
