import type { Meta, StoryObj } from '@storybook/vue3'
import Tag from './index.vue'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['informative', 'interactive', 'contextualised', 'removable', 'selectable'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Informative: Story = { args: { label: 'Vue 3' } }
export const Interactive: Story = { args: { label: 'Click me', type: 'interactive' } }
export const Selectable: Story = { args: { label: 'Select', type: 'selectable', id: 'tag-1', modelValue: false } }
export const Removable: Story = { args: { label: 'Remove me', type: 'removable', id: 'tag-r' } }
export const Contextualised: Story = { args: { label: 'Filter', type: 'contextualised', contextualisedNumber: 3 } }
export const Small: Story = { args: { label: 'Small', size: 's' } }
