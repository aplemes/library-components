import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StarRating from './index.vue'

describe('StarRating', () => {
  it('renders 5 stars by default', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 0 } })
    expect(wrapper.findAll('.star-rating__star').length).toBe(5)
  })
  it('renders 1 star in compact mode', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, compact: true } })
    expect(wrapper.findAll('.star-rating__star').length).toBe(1)
  })
  it('applies star-rating class', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3 } })
    expect(wrapper.find('.star-rating').exists()).toBe(true)
  })
  it('applies size class', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3, size: 'm' } })
    expect(wrapper.find('.star-rating').classes()).toContain('star-rating--m')
  })
  it('renders full stars for value', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3 } })
    const fullStars = wrapper.findAll('.star-rating__star--full')
    expect(fullStars.length).toBe(3)
  })
  it('renders empty stars for remaining', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 2 } })
    const emptyStars = wrapper.findAll('.star-rating__star--empty')
    expect(emptyStars.length).toBe(3)
  })
  it('does not emit when readonly', async () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3, readonly: true } })
    await wrapper.findAll('.star-rating__star')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
  it('emits update:modelValue when interactive and clicked', async () => {
    const wrapper = mount(StarRating, { props: { modelValue: 0, readonly: false } })
    await wrapper.findAll('.star-rating__star')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([3])
  })
  it('applies interactive class when not readonly', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 0, readonly: false } })
    expect(wrapper.find('.star-rating').classes()).toContain('star-rating--interactive')
  })
  it('renders text when provided', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, text: '(120 reviews)' } })
    expect(wrapper.find('.star-rating__info').text()).toBe('(120 reviews)')
  })
  it('has role img when readonly', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3 } })
    expect(wrapper.find('.star-rating__wrapper').attributes('role')).toBe('img')
  })
  it('renders as anchor when href is provided', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, href: 'https://example.com' } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })
  it('applies the target attribute on anchor', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, href: 'https://example.com', target: '_blank' } })
    expect(wrapper.attributes('target')).toBe('_blank')
  })
  it('renders as div when no href is provided', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 3 } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })
  it('applies star-rating--link class when href is set', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, href: 'https://example.com' } })
    expect(wrapper.classes()).toContain('star-rating--link')
  })
  it('is readonly when href is set', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, href: 'https://example.com', readonly: false } })
    expect(wrapper.find('.star-rating__wrapper').attributes('role')).toBe('img')
  })
  it('shows href text in info span when no text prop', () => {
    const wrapper = mount(StarRating, { props: { modelValue: 4, href: 'https://example.com' } })
    expect(wrapper.find('.star-rating__info').exists()).toBe(true)
  })
})
