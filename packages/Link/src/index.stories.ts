import type { Meta, StoryObj } from '@storybook/vue3'
import Link from './index.vue'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['standard', 'secondary', 'accent', 'inverse'] },
    size: { control: 'select', options: ['s', 'm'] },
    iconPosition: { control: 'select', options: ['left', 'right'] },
    inline: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { href: '#', appearance: 'standard' },
  render: (args) => ({ components: { Link }, setup() { return { args } }, template: '<Link v-bind="args">Click here</Link>' }),
}
export const Secondary: Story = {
  args: { href: '#', appearance: 'secondary' },
  render: (args) => ({ components: { Link }, setup() { return { args } }, template: '<Link v-bind="args">Secondary link</Link>' }),
}
export const Accent: Story = {
  args: { href: '#', appearance: 'accent' },
  render: (args) => ({ components: { Link }, setup() { return { args } }, template: '<Link v-bind="args">Accent link</Link>' }),
}
export const Inline: Story = {
  args: { href: '#', inline: true },
  render: (args) => ({ components: { Link }, setup() { return { args } }, template: '<p>This is an <Link v-bind="args">inline link</Link> in text.</p>' }),
}
