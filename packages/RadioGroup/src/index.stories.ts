import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './index.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    inline: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 'opt-a', label: 'Option A', value: 'a' },
  { id: 'opt-b', label: 'Option B', value: 'b' },
  { id: 'opt-c', label: 'Option C', value: 'c', disabled: true },
]

export const Default: Story = { args: { name: 'group', options } }
export const WithSelection: Story = { args: { name: 'group', options, modelValue: 'a' } }
export const Inline: Story = { args: { name: 'group-inline', options, inline: true } }
export const Invalid: Story = { args: { name: 'group-invalid', options, isInvalid: true } }
