import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './index.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Initials: Story = { args: { size: 'm' }, render: (args) => ({ components: { Avatar }, setup() { return { args } }, template: '<Avatar v-bind="args">AB</Avatar>' }) }
export const Small: Story = { args: { size: 's' }, render: (args) => ({ components: { Avatar }, setup() { return { args } }, template: '<Avatar v-bind="args">JD</Avatar>' }) }
export const Large: Story = { args: { size: 'l' }, render: (args) => ({ components: { Avatar }, setup() { return { args } }, template: '<Avatar v-bind="args">XY</Avatar>' }) }
