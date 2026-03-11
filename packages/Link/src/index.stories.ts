import type { Meta, StoryObj } from '@storybook/vue3'
import Link from './index.vue'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Anchor element with design-system styling. Renders as a native `<a>` by default or as a `<router-link>` when the `router` prop is set. Supports an icon slot, four color appearances, two sizes and standalone or inline text modes.',
      },
    },
  },
  argTypes: {
    href: {
      description: 'Destination URL for the link (`href` on `<a>` or `to` on `<router-link>`).',
      control: 'text',
    },
    appearance: {
      description: 'Color style of the link.',
      control: 'select',
      options: ['standard', 'secondary', 'accent', 'inverse'],
    },
    size: {
      description: 'Text size of the link.',
      control: 'select',
      options: ['s', 'm'],
    },
    iconPosition: {
      description: 'Position of the icon slot relative to the link text.',
      control: 'select',
      options: ['left', 'right'],
    },
    inline: {
      description: 'When true, the link is styled as inline body text (underlined). When false, it renders as a standalone medium-weight link without underline.',
      control: 'boolean',
    },
    target: {
      description: 'HTML target attribute controlling where to open the linked URL.',
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    router: {
      description: 'When true, renders a `<router-link>` instead of an `<a>` element for use with Vue Router.',
      control: 'boolean',
    },
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
