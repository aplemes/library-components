import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusNotification from './index.vue'

describe('StatusNotification', () => {
  it('renders the title', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'Success', description: 'Done' } })
    expect(wrapper.find('.status-notif__title').text()).toBe('Success')
  })

  it('renders the description', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'Info', description: 'Your info' } })
    expect(wrapper.find('.status-notif__description').text()).toBe('Your info')
  })

  it('has status-notif class', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D' } })
    expect(wrapper.find('.status-notif').exists()).toBe(true)
  })

  it('has role status', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D' } })
    expect(wrapper.find('.status-notif').attributes('role')).toBe('status')
  })

  it('does not apply modifier class for info', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D' } })
    expect(wrapper.find('.status-notif').classes()).not.toContain('status-notif--info')
  })

  it('applies success modifier class', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D', status: 'success' } })
    expect(wrapper.find('.status-notif').classes()).toContain('status-notif--success')
  })

  it('applies error modifier class', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D', status: 'error' } })
    expect(wrapper.find('.status-notif').classes()).toContain('status-notif--error')
  })

  it('does not render close button by default', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D' } })
    expect(wrapper.find('.status-notif__close').exists()).toBe(false)
  })

  it('renders close button when closable is true', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D', closable: true } })
    expect(wrapper.find('.status-notif__close').exists()).toBe(true)
  })

  it('emits close when close button is clicked', async () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D', closable: true } })
    await wrapper.find('.status-notif__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('renders footer slot when provided', () => {
    const wrapper = mount(StatusNotification, {
      props: { title: 'T', description: 'D' },
      slots: { footer: '<button>Retry</button>' }
    })
    expect(wrapper.find('.status-notif__footer').exists()).toBe(true)
    expect(wrapper.find('.status-notif__footer button').text()).toBe('Retry')
  })

  it('does not render footer when no slot', () => {
    const wrapper = mount(StatusNotification, { props: { title: 'T', description: 'D' } })
    expect(wrapper.find('.status-notif__footer').exists()).toBe(false)
  })
})
