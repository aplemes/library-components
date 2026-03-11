import type { Meta, StoryObj } from '@storybook/vue3'
import Container from './index.vue'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A layout container that centers content with a max-width by default. Use the fluid prop to make it full-width.',
      },
    },
  },
  argTypes: {
    fluid: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fluid: false,
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args }
    },
    template: `
      <Container v-bind="args">
        <div class="bg-neutral-100 p-4 text-center rounded">
          Content inside a centered container (max-width: 1280px)
        </div>
      </Container>
    `,
  }),
}

export const Fluid: Story = {
  args: {
    fluid: true,
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args }
    },
    template: `
      <Container v-bind="args">
        <div class="bg-primary-light p-4 text-center rounded">
          Content inside a fluid (full-width) container
        </div>
      </Container>
    `,
  }),
}
