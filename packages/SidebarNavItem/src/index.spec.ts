import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarNavItem from './index.vue'

describe('SidebarNavItem', () => {
  it('renders label', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home' },
    })
    expect(wrapper.text()).toContain('Home')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home', href: '/home' },
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('/home')
  })

  it('renders as button when href is not provided', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home' },
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('applies active class when active is true', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home', active: true },
    })
    expect(wrapper.classes()).toContain('sidebar-nav-item--active')
  })

  it('does not apply active class when not active', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home', active: false },
    })
    expect(wrapper.classes()).not.toContain('sidebar-nav-item--active')
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home', disabled: true },
    })
    expect(wrapper.classes()).toContain('sidebar-nav-item--disabled')
  })

  it('renders icon slot', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home' },
      slots: { icon: '<span class="nav-icon">🏠</span>' },
    })
    expect(wrapper.find('.nav-icon').exists()).toBe(true)
  })

  it('renders as list item', () => {
    const wrapper = mount(SidebarNavItem, {
      props: { label: 'Home' },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('li')
  })
})
