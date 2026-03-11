import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CircularProgressBar from './index.vue'

describe('CircularProgressBar', () => {
  it('has role progressbar', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 50 } })
    expect(wrapper.find('.circ-progress').attributes('role')).toBe('progressbar')
  })
  it('sets aria-valuenow', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 75 } })
    expect(wrapper.find('.circ-progress').attributes('aria-valuenow')).toBe('75')
  })
  it('renders SVG', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 50 } })
    expect(wrapper.find('svg').exists()).toBe(true)
  })
  it('renders both circles', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 50 } })
    expect(wrapper.findAll('circle').length).toBe(2)
  })
  it('shows percentage label by default', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 42 } })
    expect(wrapper.find('.circ-progress__value').text()).toBe('42')
    expect(wrapper.find('.circ-progress__unit').text()).toBe('%')
  })
  it('shows content value when type is content', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 3, type: 'content', contentValue: '3/10' } })
    expect(wrapper.find('.circ-progress__value').text()).toBe('3/10')
  })
  it('shows additional info when provided', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 3, type: 'content', contentValue: '3', additionalInfo: 'items' } })
    expect(wrapper.find('.circ-progress__info').text()).toBe('items')
  })
  it('applies size class for s', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 50, size: 's' } })
    expect(wrapper.find('.circ-progress').classes()).toContain('circ-progress--s')
  })
  it('does not apply size class for l (default)', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 50 } })
    expect(wrapper.find('.circ-progress').classes()).not.toContain('circ-progress--l')
  })
  it('has correct stroke-dashoffset for 0%', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 0 } })
    const circle = wrapper.find('.circ-progress__indicator')
    const circumference = 2 * Math.PI * 46
    expect(Number(circle.attributes('stroke-dashoffset'))).toBeCloseTo(circumference, 0)
  })
  it('has stroke-dashoffset 0 for 100%', () => {
    const wrapper = mount(CircularProgressBar, { props: { value: 100 } })
    const circle = wrapper.find('.circ-progress__indicator')
    expect(Number(circle.attributes('stroke-dashoffset'))).toBeCloseTo(0, 0)
  })
})
