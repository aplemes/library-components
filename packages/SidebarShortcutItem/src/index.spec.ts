import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarShortcutItem from './index.vue'

describe('SidebarShortcutItem', () => {
  it('renders label', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard' },
    })
    expect(wrapper.text()).toContain('Dashboard')
  })

  it('renders as anchor with correct href', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard' },
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('/dashboard')
  })

  it('applies active class when active is true', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard', active: true },
    })
    expect(wrapper.classes()).toContain('sidebar-shortcut-item--active')
  })

  it('does not apply active class when not active', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard', active: false },
    })
    expect(wrapper.classes()).not.toContain('sidebar-shortcut-item--active')
  })

  it('renders icon slot', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard' },
      slots: { icon: '<span class="shortcut-icon">📊</span>' },
    })
    expect(wrapper.find('.shortcut-icon').exists()).toBe(true)
  })

  it('renders as list item with menuitem role', () => {
    const wrapper = mount(SidebarShortcutItem, {
      props: { label: 'Dashboard', href: '/dashboard' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('li')
    expect(wrapper.attributes('role')).toBe('menuitem')
  })
})
