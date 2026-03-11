import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusBadge from './index.vue'

describe('StatusBadge', () => {
  it('renders the label', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Active' } })
    expect(wrapper.find('.status-badge__label').text()).toBe('Active')
  })

  it('renders a dot element', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Info' } })
    expect(wrapper.find('.status-badge__dot').exists()).toBe(true)
  })

  it('applies info dot class by default', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Info' } })
    expect(wrapper.find('.status-badge__dot').classes()).toContain('status-badge__dot--info')
  })

  it('applies success dot class', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Done', status: 'success' } })
    expect(wrapper.find('.status-badge__dot').classes()).toContain('status-badge__dot--success')
  })

  it('applies success badge class', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Done', status: 'success' } })
    expect(wrapper.find('.status-badge').classes()).toContain('status-badge--success')
  })

  it('does not apply badge class for info', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Info' } })
    expect(wrapper.find('.status-badge').classes()).not.toContain('status-badge--info')
  })

  it('applies error badge class', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Failed', status: 'error' } })
    expect(wrapper.find('.status-badge').classes()).toContain('status-badge--error')
  })

  it('applies neutral badge class', () => {
    const wrapper = mount(StatusBadge, { props: { label: 'Unknown', status: 'neutral' } })
    expect(wrapper.find('.status-badge').classes()).toContain('status-badge--neutral')
  })
})
