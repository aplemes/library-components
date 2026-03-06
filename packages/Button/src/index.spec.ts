import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  it('renders the label', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(Button, { props: { label: 'Click me' } })
    expect(wrapper.classes()).toContain('btn--primary')
  })

  it('applies the given variant class', () => {
    const wrapper = mount(Button, { props: { label: 'Click me', variant: 'secondary' } })
    expect(wrapper.classes()).toContain('btn--secondary')
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
})
