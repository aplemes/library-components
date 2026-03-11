import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarExpandableItem from './index.vue'

describe('SidebarExpandableItem', () => {
  it('renders label', () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
    })
    expect(wrapper.text()).toContain('Settings')
  })

  it('starts collapsed (aria-expanded false)', () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
    })
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false')
  })

  it('expands on trigger click', async () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true')
  })

  it('collapses on second trigger click', async () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
    })
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false')
  })

  it('shows sub-items slot when expanded', async () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
      slots: { default: '<li class="sub-item">Sub Item</li>' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.sub-item').exists()).toBe(true)
  })

  it('hides sub-items when collapsed', () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
      slots: { default: '<li class="sub-item">Sub Item</li>' },
    })
    expect(wrapper.find('.sub-item').exists()).toBe(false)
  })

  it('applies active class when active', () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings', active: true },
    })
    expect(wrapper.classes()).toContain('sidebar-expandable-item--active')
  })

  it('renders icon slot', () => {
    const wrapper = mount(SidebarExpandableItem, {
      props: { label: 'Settings' },
      slots: { icon: '<span class="settings-icon">⚙</span>' },
    })
    expect(wrapper.find('.settings-icon').exists()).toBe(true)
  })
})
