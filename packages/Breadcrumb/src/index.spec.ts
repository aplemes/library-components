import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Breadcrumb from './index.vue'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Drills', href: '/products/drills' },
]

describe('Breadcrumb', () => {
  it('renders a nav element', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('renders correct number of items', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    expect(wrapper.findAll('.breadcrumb__item')).toHaveLength(3)
  })

  it('renders all link labels', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Products')
    expect(wrapper.text()).toContain('Drills')
  })

  it('sets aria-current="page" on the last item', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    const anchors = wrapper.findAll('a')
    expect(anchors[anchors.length - 1].attributes('aria-current')).toBe('page')
  })

  it('does not set aria-current on non-last items', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    const anchors = wrapper.findAll('a')
    expect(anchors[0].attributes('aria-current')).toBeUndefined()
    expect(anchors[1].attributes('aria-current')).toBeUndefined()
  })

  it('renders separators between items', () => {
    const wrapper = mount(Breadcrumb, { props: { links } })
    const separators = wrapper.findAll('.breadcrumb__separator')
    // n-1 separators
    expect(separators).toHaveLength(links.length - 1)
  })

  it('applies dark class when appearance is dark', () => {
    const wrapper = mount(Breadcrumb, { props: { links, appearance: 'dark' } })
    expect(wrapper.find('nav').classes()).toContain('breadcrumb--dark')
  })

  it('does not apply dark class for light appearance', () => {
    const wrapper = mount(Breadcrumb, { props: { links, appearance: 'light' } })
    expect(wrapper.find('nav').classes()).not.toContain('breadcrumb--dark')
  })
})
