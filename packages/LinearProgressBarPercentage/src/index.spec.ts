import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LinearProgressBarPercentage from './index.vue'

describe('LinearProgressBarPercentage', () => {
  it('renders with linear-percent class', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 50 } })
    expect(wrapper.find('.linear-percent').exists()).toBe(true)
  })
  it('has role progressbar', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 50 } })
    expect(wrapper.find('.linear-percent__track').attributes('role')).toBe('progressbar')
  })
  it('sets aria-valuenow', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 70 } })
    expect(wrapper.find('.linear-percent__track').attributes('aria-valuenow')).toBe('70')
  })
  it('shows the percentage value', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 45 } })
    expect(wrapper.find('.linear-percent__value').text()).toContain('45')
  })
  it('shows % unit', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 45 } })
    expect(wrapper.find('.linear-percent__unit').text()).toBe('%')
  })
  it('sets track width to value%', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 60 } })
    expect(wrapper.find('.linear-percent__track').attributes('style')).toContain('width: 60%')
  })
  it('defaults to 0', () => {
    const wrapper = mount(LinearProgressBarPercentage)
    expect(wrapper.find('.linear-percent__track').attributes('aria-valuenow')).toBe('0')
  })
  it('sets aria-valuemin to 0', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 50 } })
    expect(wrapper.find('.linear-percent__track').attributes('aria-valuemin')).toBe('0')
  })
  it('sets aria-valuemax to 100', () => {
    const wrapper = mount(LinearProgressBarPercentage, { props: { value: 50 } })
    expect(wrapper.find('.linear-percent__track').attributes('aria-valuemax')).toBe('100')
  })
})
