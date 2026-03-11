import type { Meta, StoryObj } from '@storybook/vue3'
import TileSelectable from './index.vue'

const meta: Meta<typeof TileSelectable> = {
  title: 'Components/TileSelectable',
  component: TileSelectable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A selectable tile component backed by a checkbox or radio input. Supports v-model binding, input position customization, and optional details slot for additional content below the main body.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'boolean' },
    bordered: { control: 'boolean' },
    inputType: {
      control: 'select',
      options: ['checkbox', 'radio'],
    },
    inputPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    centered: { control: 'boolean' },
    hideInput: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { modelValue: false, bordered: true },
  render: (args) => ({
    components: { TileSelectable },
    setup: () => ({ args }),
    template: `<TileSelectable v-bind="args"><p>Selectable tile content</p></TileSelectable>`,
  }),
}

export const Selected: Story = {
  args: { modelValue: true, bordered: true },
  render: (args) => ({
    components: { TileSelectable },
    setup: () => ({ args }),
    template: `<TileSelectable v-bind="args"><p>This tile is selected</p></TileSelectable>`,
  }),
}

export const Radio: Story = {
  args: { modelValue: false, bordered: true, inputType: 'radio' },
  render: (args) => ({
    components: { TileSelectable },
    setup: () => ({ args }),
    template: `<TileSelectable v-bind="args"><p>Radio tile selection</p></TileSelectable>`,
  }),
}

export const InputLeft: Story = {
  args: { modelValue: false, bordered: true, inputPosition: 'left' },
  render: (args) => ({
    components: { TileSelectable },
    setup: () => ({ args }),
    template: `<TileSelectable v-bind="args"><p>Input on the left</p></TileSelectable>`,
  }),
}

export const WithDetails: Story = {
  args: { modelValue: true, bordered: true },
  render: (args) => ({
    components: { TileSelectable },
    setup: () => ({ args }),
    template: `
      <TileSelectable v-bind="args">
        <p>Main content</p>
        <template #details><p style="color:#666">Additional details shown here</p></template>
      </TileSelectable>
    `,
  }),
}
