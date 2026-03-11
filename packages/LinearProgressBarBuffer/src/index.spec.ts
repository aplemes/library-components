import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LinearProgressBarBuffer from './index.vue'

describe('LinearProgressBarBuffer', () => {
  it('renders with linear-buffer class', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50 } })
    expect(wrapper.find('.linear-buffer').exists()).toBe(true)
  })
  it('has role progressbar', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50 } })
    expect(wrapper.find('.linear-buffer__track').attributes('role')).toBe('progressbar')
  })
  it('sets aria-valuenow', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 60 } })
    expect(wrapper.find('.linear-buffer__track').attributes('aria-valuenow')).toBe('60')
  })
  it('sets indicator width to value%', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 75 } })
    expect(wrapper.find('.linear-buffer__indicator').attributes('style')).toContain('width: 75%')
  })
  it('defaults to 0% when no value', () => {
    const wrapper = mount(LinearProgressBarBuffer)
    expect(wrapper.find('.linear-buffer__indicator').attributes('style')).toContain('width: 0%')
  })
  it('applies size class for s', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50, size: 's' } })
    expect(wrapper.find('.linear-buffer').classes()).toContain('linear-buffer--s')
  })
  it('does not apply size class for m (default)', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50 } })
    expect(wrapper.find('.linear-buffer').classes()).not.toContain('linear-buffer--m')
  })
  it('sets aria-valuemin to 0', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50 } })
    expect(wrapper.find('.linear-buffer__track').attributes('aria-valuemin')).toBe('0')
  })
  it('sets aria-valuemax to 100', () => {
    const wrapper = mount(LinearProgressBarBuffer, { props: { value: 50 } })
    expect(wrapper.find('.linear-buffer__track').attributes('aria-valuemax')).toBe('100')
  })
})
