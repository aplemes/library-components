import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Loader from './index.vue'

describe('Loader', () => {
  it('renders the spinner svg', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('applies the loader class', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('.loader').exists()).toBe(true)
  })

  it('renders text when provided', () => {
    const wrapper = mount(Loader, { props: { text: 'Loading...' } })
    expect(wrapper.find('.loader__text').text()).toBe('Loading...')
    expect(wrapper.find('.loader__text').attributes('role')).toBe('status')
  })

  it('does not render text element when text is not provided', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('.loader__text').exists()).toBe(false)
  })

  it('applies size class for non-default sizes', () => {
    const wrapper = mount(Loader, { props: { size: 's' } })
    expect(wrapper.find('.loader').classes()).toContain('loader--s')
  })

  it('does not apply size class for default size m', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('.loader').classes()).not.toContain('loader--m')
  })

  it('applies accent appearance class', () => {
    const wrapper = mount(Loader, { props: { appearance: 'accent' } })
    expect(wrapper.find('.loader').classes()).toContain('loader--accent')
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('.loader').classes()).not.toContain('loader--standard')
  })

  it('applies with-text class when text is set', () => {
    const wrapper = mount(Loader, { props: { text: 'Loading' } })
    expect(wrapper.find('.loader').classes()).toContain('loader--with-text')
  })

  it('sets correct viewBox for size xs', () => {
    const wrapper = mount(Loader, { props: { size: 'xs' } })
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 20 20')
  })

  it('sets correct viewBox for size l', () => {
    const wrapper = mount(Loader, { props: { size: 'l' } })
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 64 64')
  })

  it('sets correct circle radius for size m', () => {
    const wrapper = mount(Loader, { props: { size: 'm' } })
    expect(wrapper.find('circle').attributes('r')).toBe('9')
  })
})
