import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from './index.vue'

const mountOptions = {
  attachTo: document.body,
  global: { stubs: { Teleport: true } }
}

describe('Modal', () => {
  it('does not render when open is false', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'Test', open: false } })
    expect(wrapper.find('.modal').exists()).toBe(false)
    wrapper.unmount()
  })
  it('renders when open is true', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'Test Modal', open: true } })
    expect(wrapper.find('.modal').exists()).toBe(true)
    wrapper.unmount()
  })
  it('renders the title', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'Hello', open: true } })
    expect(wrapper.find('.modal__title').text()).toBe('Hello')
    wrapper.unmount()
  })
  it('renders the description', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', description: 'My description', open: true } })
    expect(wrapper.find('.modal__body p').text()).toBe('My description')
    wrapper.unmount()
  })
  it('has role dialog', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.modal').attributes('role')).toBe('dialog')
    wrapper.unmount()
  })
  it('renders close button when closable', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, closable: true } })
    expect(wrapper.find('.modal__close').exists()).toBe(true)
    wrapper.unmount()
  })
  it('does not render close button when not closable', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, closable: false } })
    expect(wrapper.find('.modal__close').exists()).toBe(false)
    wrapper.unmount()
  })
  it('emits close when close button is clicked', async () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.modal__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })
  it('emits update:open with false when close button is clicked', async () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.modal__close').trigger('click')
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
    wrapper.unmount()
  })
  it('emits close when backdrop is clicked and closable is true', async () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.modal-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })
  it('renders footer slot when provided', () => {
    const wrapper = mount(Modal, {
      ...mountOptions,
      props: { title: 'T', open: true },
      slots: { footer: '<button>OK</button>' }
    })
    expect(wrapper.find('.modal__footer').exists()).toBe(true)
    wrapper.unmount()
  })
  it('applies size class for l', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, size: 'l' } })
    expect(wrapper.find('.modal').classes()).toContain('modal--l')
    wrapper.unmount()
  })
  it('emits close and update:open when closeOnOverlay is true and backdrop is clicked', async () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, closable: false, closeOnOverlay: true } })
    await wrapper.find('.modal-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
    wrapper.unmount()
  })
  it('does not close on backdrop click when closable is false and closeOnOverlay is false', async () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, closable: false, closeOnOverlay: false } })
    await wrapper.find('.modal-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeFalsy()
    wrapper.unmount()
  })
  it('applies scroll class to modal body when scroll is true', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true, scroll: true } })
    expect(wrapper.find('.modal__body').classes()).toContain('modal__body--scroll')
    wrapper.unmount()
  })
  it('does not apply scroll class when scroll is false (default)', () => {
    const wrapper = mount(Modal, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.modal__body').classes()).not.toContain('modal__body--scroll')
    wrapper.unmount()
  })
})
