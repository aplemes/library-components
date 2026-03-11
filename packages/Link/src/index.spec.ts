import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from './index.vue'

describe('Link', () => {
  it('renders as an anchor tag by default', () => {
    const wrapper = mount(Link, { props: { href: '/home' } })
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('sets the href attribute', () => {
    const wrapper = mount(Link, { props: { href: '/about' } })
    expect(wrapper.find('a').attributes('href')).toBe('/about')
  })

  it('renders slot content', () => {
    const wrapper = mount(Link, { slots: { default: 'Click here' } })
    expect(wrapper.find('.mc-link__label').text()).toBe('Click here')
  })

  it('applies mc-link class', () => {
    const wrapper = mount(Link)
    expect(wrapper.find('.mc-link').exists()).toBe(true)
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(Link)
    expect(wrapper.find('.mc-link').classes()).not.toContain('mc-link--standard')
  })

  it('applies secondary appearance class', () => {
    const wrapper = mount(Link, { props: { appearance: 'secondary' } })
    expect(wrapper.find('.mc-link').classes()).toContain('mc-link--secondary')
  })

  it('applies size class for m', () => {
    const wrapper = mount(Link, { props: { size: 'm' } })
    expect(wrapper.find('.mc-link').classes()).toContain('mc-link--m')
  })

  it('applies inline class when inline is true', () => {
    const wrapper = mount(Link, { props: { inline: true } })
    expect(wrapper.find('.mc-link').classes()).toContain('mc-link--inline')
  })

  it('applies stand-alone class when not inline', () => {
    const wrapper = mount(Link)
    expect(wrapper.find('.mc-link').classes()).toContain('mc-link--stand-alone')
  })

  it('renders icon slot on the left by default', () => {
    const wrapper = mount(Link, { slots: { icon: '<svg />' } })
    const icons = wrapper.findAll('.mc-link__icon')
    expect(icons.length).toBe(1)
  })

  it('opens in new tab when target is _blank', () => {
    const wrapper = mount(Link, { props: { href: 'https://example.com', target: '_blank' } })
    expect(wrapper.find('a').attributes('target')).toBe('_blank')
  })
})
