import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  it('renders the label prop', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders slot content', () => {
    const wrapper = mount(Button, { slots: { default: 'Slot text' } })
    expect(wrapper.text()).toBe('Slot text')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.classes()).toContain('btn--primary')
  })

  it('applies the given variant class', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', variant: 'secondary' } })
    expect(wrapper.classes()).toContain('btn--secondary')
  })

  it('applies ghost variant', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', variant: 'ghost' } })
    expect(wrapper.classes()).toContain('btn--ghost')
  })

  it('is disabled when the disabled prop is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', disabled: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('applies size class for small', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', size: 's' } })
    expect(wrapper.classes()).toContain('btn--s')
  })

  it('applies size class for large', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', size: 'l' } })
    expect(wrapper.classes()).toContain('btn--l')
  })

  it('does not apply size class for medium (default)', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', size: 'm' } })
    expect(wrapper.classes()).not.toContain('btn--m')
  })

  it('applies appearance danger class', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', appearance: 'danger' } })
    expect(wrapper.classes()).toContain('btn--danger')
  })

  it('applies appearance accent class', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', appearance: 'accent' } })
    expect(wrapper.classes()).toContain('btn--accent')
  })

  it('applies appearance inverse class', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', appearance: 'inverse' } })
    expect(wrapper.classes()).toContain('btn--inverse')
  })

  it('applies icon-only class when iconPosition is only', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', iconPosition: 'only' } })
    expect(wrapper.classes()).toContain('btn--icon-only')
  })

  it('renders loading spinner when isLoading is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', isLoading: true } })
    expect(wrapper.find('.btn__spinner').exists()).toBe(true)
  })

  it('is disabled when isLoading is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', isLoading: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('applies loading class when isLoading is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', isLoading: true } })
    expect(wrapper.classes()).toContain('btn--loading')
  })

  it('sets button type attribute', () => {
    const wrapper = mount(Button, { props: { label: 'Submit', type: 'submit' } })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('has default type button', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('uses ghost variant when ghost prop is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', ghost: true } })
    expect(wrapper.classes()).toContain('btn--ghost')
  })

  it('uses ghost variant when outlined prop is true', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', outlined: true } })
    expect(wrapper.classes()).toContain('btn--ghost')
  })
})
