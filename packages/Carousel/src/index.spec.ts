import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Carousel from './index.vue'

describe('Carousel', () => {
  it('renders default slot', () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: ['<div class="slide">Slide 1</div>', '<div class="slide">Slide 2</div>'],
      },
    })
    expect(wrapper.text()).toContain('Slide 1')
  })

  it('renders prev and next buttons', () => {
    const wrapper = mount(Carousel, {
      slots: { default: '<div>Slide 1</div>' },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('prev button has correct aria-label', () => {
    const wrapper = mount(Carousel, {
      props: { previousButtonAriaLabel: 'Go back' },
      slots: { default: ['<div>Slide 1</div>', '<div>Slide 2</div>'] },
    })
    const prevBtn = wrapper.find('[aria-label="Go back"]')
    expect(prevBtn.exists()).toBe(true)
  })

  it('next button has correct aria-label', () => {
    const wrapper = mount(Carousel, {
      props: { nextButtonAriaLabel: 'Go forward' },
      slots: { default: ['<div>Slide 1</div>', '<div>Slide 2</div>'] },
    })
    const nextBtn = wrapper.find('[aria-label="Go forward"]')
    expect(nextBtn.exists()).toBe(true)
  })

  it('first slide is active by default', () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: ['<div>Slide 1</div>', '<div>Slide 2</div>'],
      },
    })
    const slides = wrapper.findAll('.carousel__slide')
    expect(slides[0].classes()).toContain('carousel__slide--active')
    expect(slides[1].classes()).not.toContain('carousel__slide--active')
  })

  it('navigates to next slide on next button click', async () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: ['<div>Slide 1</div>', '<div>Slide 2</div>'],
      },
    })
    const nextBtn = wrapper.find('[aria-label="Next"]')
    await nextBtn.trigger('click')

    const slides = wrapper.findAll('.carousel__slide')
    expect(slides[0].classes()).not.toContain('carousel__slide--active')
    expect(slides[1].classes()).toContain('carousel__slide--active')
  })

  it('navigates back on prev button click', async () => {
    const wrapper = mount(Carousel, {
      slots: {
        default: ['<div>Slide 1</div>', '<div>Slide 2</div>'],
      },
    })
    const nextBtn = wrapper.find('[aria-label="Next"]')
    const prevBtn = wrapper.find('[aria-label="Previous"]')

    await nextBtn.trigger('click')
    await prevBtn.trigger('click')

    const slides = wrapper.findAll('.carousel__slide')
    expect(slides[0].classes()).toContain('carousel__slide--active')
  })

  it('renders header slot', () => {
    const wrapper = mount(Carousel, {
      slots: {
        header: '<h2>Carousel Title</h2>',
        default: '<div>Slide 1</div>',
      },
    })
    expect(wrapper.text()).toContain('Carousel Title')
  })

  it('prev button is disabled on first slide', () => {
    const wrapper = mount(Carousel, {
      slots: { default: ['<div>Slide 1</div>', '<div>Slide 2</div>'] },
    })
    const prevBtn = wrapper.find('[aria-label="Previous"]')
    expect(prevBtn.attributes('disabled')).toBeDefined()
  })

  it('next button is disabled on last slide', async () => {
    const wrapper = mount(Carousel, {
      slots: { default: ['<div>Slide 1</div>', '<div>Slide 2</div>'] },
    })
    const nextBtn = wrapper.find('[aria-label="Next"]')
    await nextBtn.trigger('click')
    expect(nextBtn.attributes('disabled')).toBeDefined()
  })
})
