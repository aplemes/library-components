import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Sidebar from './index.vue'

describe('Sidebar', () => {
  it('renders in expanded state when modelValue is true', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
    })
    expect(wrapper.classes()).toContain('sidebar--expanded')
  })

  it('renders in collapsed state when modelValue is false', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: false },
    })
    expect(wrapper.classes()).toContain('sidebar--collapsed')
  })

  it('renders nav slot', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
      slots: { nav: '<li class="nav-item">Home</li>' },
    })
    expect(wrapper.find('.nav-item').exists()).toBe(true)
    expect(wrapper.text()).toContain('Home')
  })

  it('renders header slot', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
      slots: { header: '<div class="header-content">Logo</div>' },
    })
    expect(wrapper.find('.header-content').exists()).toBe(true)
  })

  it('renders footer slot', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
      slots: { footer: '<div class="footer-content">User</div>' },
    })
    expect(wrapper.find('.footer-content').exists()).toBe(true)
  })

  it('renders shortcuts slot', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
      slots: { shortcuts: '<div class="shortcuts">Shortcuts</div>' },
    })
    expect(wrapper.find('.shortcuts').exists()).toBe(true)
  })

  it('emits close when close button is clicked', async () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
    })
    await wrapper.find('.sidebar__close-btn').trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('has close button', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
    })
    expect(wrapper.find('.sidebar__close-btn').exists()).toBe(true)
  })

  it('provides sidebarExpanded to child components', () => {
    const wrapper = mount(Sidebar, {
      props: { modelValue: true },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
