import type { Meta, StoryObj } from '@storybook/vue3'
import Carousel from './index.vue'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Carousel allows users to browse through multiple items using navigation controls. It shows one slide at a time and supports an optional header slot.',
      },
    },
  },
  argTypes: {
    previousButtonAriaLabel: {
      description: 'Accessible label for the previous navigation button.',
      control: 'text',
    },
    nextButtonAriaLabel: {
      description: 'Accessible label for the next navigation button.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel>
        <div style="background: #e8f4fd; padding: 40px; text-align: center; border-radius: 8px;">
          <h3>Slide 1</h3>
          <p>First slide content</p>
        </div>
      </Carousel>
    `,
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel>
        <template #header>
          <h2 style="margin: 0; font-size: 1.25rem;">Featured Items</h2>
        </template>
        <div style="background: #e8f4fd; padding: 40px; text-align: center; border-radius: 8px;">
          <h3>Slide 1</h3>
          <p>First slide content</p>
        </div>
        <div style="background: #fde8e8; padding: 40px; text-align: center; border-radius: 8px;">
          <h3>Slide 2</h3>
          <p>Second slide content</p>
        </div>
      </Carousel>
    `,
  }),
}

export const MultipleSlides: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel>
        <div style="background: #e8f4fd; padding: 60px; text-align: center; border-radius: 8px;">
          <h3>Slide 1</h3>
          <p>Navigate using the buttons above</p>
        </div>
        <div style="background: #e8fde8; padding: 60px; text-align: center; border-radius: 8px;">
          <h3>Slide 2</h3>
          <p>Second item in the carousel</p>
        </div>
        <div style="background: #fde8e8; padding: 60px; text-align: center; border-radius: 8px;">
          <h3>Slide 3</h3>
          <p>Third item in the carousel</p>
        </div>
        <div style="background: #fdfde8; padding: 60px; text-align: center; border-radius: 8px;">
          <h3>Slide 4</h3>
          <p>Fourth item in the carousel</p>
        </div>
      </Carousel>
    `,
  }),
}
