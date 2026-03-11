import type { Meta, StoryObj } from '@storybook/vue3'
import ActionListbox from './index.vue'

const sampleItems = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'delete', label: 'Delete' },
]

const meta: Meta<typeof ActionListbox> = {
  title: 'Components/ActionListbox',
  component: ActionListbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A contextual dropdown menu triggered by an activator slot. Clicking the activator toggles the dropdown. Clicking an item emits the action event with the item id and closes the dropdown. Supports disabled items, dividers, title, and four position variants.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    },
    title: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: sampleItems, position: 'bottom-right' },
  render: (args) => ({
    components: { ActionListbox },
    setup: () => ({ args }),
    template: `
      <ActionListbox v-bind="args">
        <template #activator>
          <button style="padding:8px 16px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Open Menu ▼</button>
        </template>
      </ActionListbox>
    `,
  }),
}

export const TopPosition: Story = {
  args: { items: sampleItems, position: 'top-right' },
  render: (args) => ({
    components: { ActionListbox },
    setup: () => ({ args }),
    template: `
      <div style="padding-top:120px">
        <ActionListbox v-bind="args">
          <template #activator>
            <button style="padding:8px 16px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Open Menu ▲</button>
          </template>
        </ActionListbox>
      </div>
    `,
  }),
}

export const WithDivider: Story = {
  args: {
    items: [
      { id: 'edit', label: 'Edit' },
      { id: 'duplicate', label: 'Duplicate' },
      { id: 'delete', label: 'Delete', divider: true },
    ],
    position: 'bottom-right',
    title: 'Actions',
  },
  render: (args) => ({
    components: { ActionListbox },
    setup: () => ({ args }),
    template: `
      <ActionListbox v-bind="args">
        <template #activator>
          <button style="padding:8px 16px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Open ⋮</button>
        </template>
      </ActionListbox>
    `,
  }),
}
