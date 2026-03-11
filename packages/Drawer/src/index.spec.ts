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
  it('emits close when backdrop is clicked', async () => {
    const wrapper = mount(Drawer, { ...mountOptions, props: { title: 'T', open: true } })
    await wrapper.find('.drawer-backdrop').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
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
})
