import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusDot from './index.vue'

describe('StatusDot', () => {
  it('renders with status-dot class', () => {
    const wrapper = mount(StatusDot)
    expect(wrapper.find('.status-dot').exists()).toBe(true)
  })

  it('does not apply status-dot--info class by default (base style handles it)', () => {
    const wrapper = mount(StatusDot)
    expect(wrapper.find('.status-dot').classes()).not.toContain('status-dot--info')
  })

  it('applies success class', () => {
    const wrapper = mount(StatusDot, { props: { status: 'success' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--success')
  })

  it('applies warning class', () => {
    const wrapper = mount(StatusDot, { props: { status: 'warning' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--warning')
  })

  it('applies error class', () => {
    const wrapper = mount(StatusDot, { props: { status: 'error' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--error')
  })

  it('applies neutral class', () => {
    const wrapper = mount(StatusDot, { props: { status: 'neutral' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--neutral')
  })

  it('does not apply size class when size is m (default)', () => {
    const wrapper = mount(StatusDot, { props: { size: 'm' } })
    expect(wrapper.find('.status-dot').classes()).not.toContain('status-dot--m')
  })

  it('applies small size class', () => {
    const wrapper = mount(StatusDot, { props: { size: 's' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--s')
  })

  it('applies large size class', () => {
    const wrapper = mount(StatusDot, { props: { size: 'l' } })
    expect(wrapper.find('.status-dot').classes()).toContain('status-dot--l')
  })
})
