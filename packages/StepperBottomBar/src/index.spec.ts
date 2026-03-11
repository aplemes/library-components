import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepperBottomBar from './index.vue'

const steps = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' },
]

describe('StepperBottomBar', () => {
  it('renders', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders next button', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0 } })
    expect(wrapper.find('.stepper-bottom-bar__next').exists()).toBe(true)
    expect(wrapper.find('.stepper-bottom-bar__next').text()).toBe('Next')
  })

  it('does not render prev button on first step', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0 } })
    expect(wrapper.find('.stepper-bottom-bar__prev').exists()).toBe(false)
  })

  it('renders prev button on non-first step', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 1 } })
    expect(wrapper.find('.stepper-bottom-bar__prev').exists()).toBe(true)
  })

  it('shows validate label on last step', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 2 } })
    expect(wrapper.find('.stepper-bottom-bar__next').text()).toBe('Validate')
  })

  it('emits update:modelValue when clicking next', async () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0 } })
    await wrapper.find('.stepper-bottom-bar__next').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('emits validate on last step next click', async () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 2 } })
    await wrapper.find('.stepper-bottom-bar__next').trigger('click')
    expect(wrapper.emitted('validate')).toBeTruthy()
  })

  it('renders cancel button when cancel is true', () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0, cancel: true } })
    expect(wrapper.find('.stepper-bottom-bar__cancel').exists()).toBe(true)
  })

  it('emits cancel when cancel button clicked', async () => {
    const wrapper = mount(StepperBottomBar, { props: { steps, modelValue: 0, cancel: true } })
    await wrapper.find('.stepper-bottom-bar__cancel').trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })
})
