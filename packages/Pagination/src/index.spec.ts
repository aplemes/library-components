import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from './index.vue'

describe('Pagination', () => {
  it('renders', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders correct number of page buttons', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5 } })
    // 5 page buttons + prev + next = 7
    const pageButtons = wrapper.findAll('.pagination__button').filter(btn =>
      !btn.classes('pagination__button--prev') && !btn.classes('pagination__button--next')
    )
    expect(pageButtons.length).toBe(5)
  })

  it('marks current page as active', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 3, totalPages: 5 } })
    const buttons = wrapper.findAll('.pagination__button')
    // index 0=prev, 1=p1, 2=p2, 3=p3, 4=p4, 5=p5, 6=next
    expect(buttons[3].classes()).toContain('pagination__button--active')
  })

  it('disables prev button on first page', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5 } })
    const prev = wrapper.find('.pagination__button--prev')
    expect(prev.attributes('disabled')).toBeDefined()
  })

  it('disables next button on last page', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 5, totalPages: 5 } })
    const next = wrapper.find('.pagination__button--next')
    expect(next.attributes('disabled')).toBeDefined()
  })

  it('emits update:modelValue when clicking next', async () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5 } })
    await wrapper.find('.pagination__button--next').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([2])
  })

  it('emits update:modelValue when clicking prev', async () => {
    const wrapper = mount(Pagination, { props: { modelValue: 3, totalPages: 5 } })
    await wrapper.find('.pagination__button--prev').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([2])
  })

  it('renders select in compact mode', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5, compact: true } })
    expect(wrapper.find('.pagination__select').exists()).toBe(true)
    expect(wrapper.findAll('.pagination__button').filter(b =>
      !b.classes('pagination__button--prev') && !b.classes('pagination__button--next')
    ).length).toBe(0)
  })
})
