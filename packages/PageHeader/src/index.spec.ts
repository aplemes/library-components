import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from './index.vue'

describe('PageHeader', () => {
  it('renders title', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'My Page' },
    })
    expect(wrapper.text()).toContain('My Page')
  })

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page', shadow: true },
    })
    expect(wrapper.classes()).toContain('page-header--shadow')
  })

  it('does not apply shadow class by default', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
    })
    expect(wrapper.classes()).not.toContain('page-header--shadow')
  })

  it('renders back button when backButton prop is true', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page', backButton: true },
    })
    expect(wrapper.find('.page-header__back-btn').exists()).toBe(true)
  })

  it('does not render back button by default', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
    })
    expect(wrapper.find('.page-header__back-btn').exists()).toBe(false)
  })

  it('emits back event when back button is clicked', async () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page', backButton: true },
    })
    await wrapper.find('.page-header__back-btn').trigger('click')
    expect(wrapper.emitted('back')).toHaveLength(1)
  })

  it('emits toggle-menu event when menu button is clicked', async () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
    })
    await wrapper.find('.page-header__menu-btn').trigger('click')
    expect(wrapper.emitted('toggle-menu')).toHaveLength(1)
  })

  it('renders status badge when status and statusLabel are provided', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page', status: 'success', statusLabel: 'Active' },
    })
    expect(wrapper.text()).toContain('Active')
    expect(wrapper.find('.page-header__badge').exists()).toBe(true)
  })

  it('renders extraInfo when provided', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page', extraInfo: 'Last updated 2h ago' },
    })
    expect(wrapper.text()).toContain('Last updated 2h ago')
  })

  it('renders actions slot', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
      slots: { actions: '<button>Save</button>' },
    })
    expect(wrapper.text()).toContain('Save')
  })

  it('renders tabs slot', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
      slots: { tabs: '<nav>Tab 1</nav>' },
    })
    expect(wrapper.find('.page-header__tabs').exists()).toBe(true)
    expect(wrapper.text()).toContain('Tab 1')
  })

  it('does not render tabs section when tabs slot is empty', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
    })
    expect(wrapper.find('.page-header__tabs').exists()).toBe(false)
  })

  it('renders content slot', () => {
    const wrapper = mount(PageHeader, {
      props: { title: 'Page' },
      slots: { content: '<div class="extra">Extra content</div>' },
    })
    expect(wrapper.find('.extra').exists()).toBe(true)
  })
})
