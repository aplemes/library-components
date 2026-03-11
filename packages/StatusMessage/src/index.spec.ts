import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusMessage from './index.vue'

describe('StatusMessage', () => {
  it('renders the label', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'All good' } })
    expect(wrapper.find('.status-message__label').text()).toBe('All good')
  })

  it('renders an icon for info status', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Info' } })
    expect(wrapper.find('.status-message__icon').exists()).toBe(true)
  })

  it('has status-message class', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Test' } })
    expect(wrapper.find('.status-message').exists()).toBe(true)
  })

  it('does not apply modifier class for info (default)', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Info' } })
    expect(wrapper.find('.status-message').classes()).not.toContain('status-message--info')
  })

  it('applies success modifier class', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Done', status: 'success' } })
    expect(wrapper.find('.status-message').classes()).toContain('status-message--success')
  })

  it('applies error modifier class', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Error', status: 'error' } })
    expect(wrapper.find('.status-message').classes()).toContain('status-message--error')
  })

  it('renders spinning icon for inprogress status', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Loading', status: 'inprogress' } })
    expect(wrapper.find('.status-message__icon--spinning').exists()).toBe(true)
  })

  it('applies inprogress modifier class', () => {
    const wrapper = mount(StatusMessage, { props: { label: 'Loading', status: 'inprogress' } })
    expect(wrapper.find('.status-message').classes()).toContain('status-message--inprogress')
  })
})
