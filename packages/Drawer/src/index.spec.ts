import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Drawer from './index.vue'

const mountOptions = {
  attachTo: document.body,
  global: { stubs: { Teleport: true } }
}

describe('Drawer', () => {
  it('does not render when open is false', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'Test', open: false } })
    expect(wrapper.find('.drawer').exists()).toBe(false)
    wrapper.unmount()
  })
  it('renders when open is true', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'Test', open: true } })
    expect(wrapper.find('.drawer').exists()).toBe(true)
    wrapper.unmount()
  })
  it('renders the title', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'My Drawer', open: true } })
    expect(wrapper.find('.drawer__title').text()).toBe('My Drawer')
    wrapper.unmount()
  })
  it('has role dialog', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.drawer').attributes('role')).toBe('dialog')
    wrapper.unmount()
  })
  it('defaults to right position', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.drawer').classes()).toContain('drawer--right')
    wrapper.unmount()
  })
  it('applies left position class', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, position: 'left' } })
    expect(wrapper.find('.drawer').classes()).toContain('drawer--left')
    wrapper.unmount()
  })
  it('renders close button when closable', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, closable: true } })
    expect(wrapper.find('.drawer__close').exists()).toBe(true)
    wrapper.unmount()
  })
  it('does not render close button when not closable', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, closable: false } })
    expect(wrapper.find('.drawer__close').exists()).toBe(false)
    wrapper.unmount()
  })
  it('emits close when close button is clicked', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.drawer__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })
  it('emits update:open false when close button is clicked', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.drawer__close').trigger('click')
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')![0]).toEqual([false])
    wrapper.unmount()
  })
  it('emits close when backdrop is clicked (closable default)', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.drawer-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })
  it('emits close when backdrop is clicked and closeOnOverlay is true', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, closable: false, closeOnOverlay: true } })
    await wrapper.find('.drawer-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })
  it('does not emit close when backdrop is clicked and closable is false and closeOnOverlay is false', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, closable: false, closeOnOverlay: false } })
    await wrapper.find('.drawer-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeFalsy()
    wrapper.unmount()
  })
  it('renders footer slot when provided', () => {
    const wrapper = mount(Drawer, {
      ...mountOptions,
      props: { title: 'T', open: true },
      slots: { footer: '<button>OK</button>' }
    })
    expect(wrapper.find('.drawer__footer').exists()).toBe(true)
    wrapper.unmount()
  })
  it('applies size class for l', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, size: 'l' } })
    expect(wrapper.find('.drawer').classes()).toContain('drawer--l')
    wrapper.unmount()
  })
  it('applies extended class when extended is true', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, extended: true } })
    expect(wrapper.find('.drawer').classes()).toContain('drawer--extended')
    wrapper.unmount()
  })
  it('does not apply extended class by default', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.drawer').classes()).not.toContain('drawer--extended')
    wrapper.unmount()
  })
  it('renders back button when back is true', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, back: true } })
    expect(wrapper.find('.drawer__back').exists()).toBe(true)
    wrapper.unmount()
  })
  it('does not render back button by default', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.drawer__back').exists()).toBe(false)
    wrapper.unmount()
  })
  it('emits back event when back button is clicked', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, back: true } })
    await wrapper.find('.drawer__back').trigger('click')
    expect(wrapper.emitted('back')).toBeTruthy()
    wrapper.unmount()
  })
  it('renders contentTitle when provided', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true, contentTitle: 'Section Title' } })
    expect(wrapper.find('.drawer__content-title').text()).toBe('Section Title')
    wrapper.unmount()
  })
  it('does not render contentTitle element when not provided', () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    expect(wrapper.find('.drawer__content-title').exists()).toBe(false)
    wrapper.unmount()
  })
})
