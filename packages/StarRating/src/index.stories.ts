import type { Meta, StoryObj } from '@storybook/vue3'
import StarRating from './index.vue'
const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Star rating display and input component. In read-only mode it renders full and half stars based on the numeric value. In interactive mode the user can hover and click to select a rating. Compact mode shows a single star with a value label beside it. Supports three sizes and two color appearances. When `href` is set the rating is wrapped in an anchor tag; use `router` to use router-link instead.',
      },
    },
  },
  argTypes: {
    modelValue: {
      description: 'Current rating value. Supports decimals (e.g. 3.5) for half-star display in read-only mode.',
      control: 'number',
    },
    readonly: {
      description: 'When true, stars are display-only and cannot be clicked. Defaults to true.',
      control: 'boolean',
    },
    size: {
      description: 'Size of each star icon.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    compact: {
      description: 'When true, renders a single star alongside the value instead of the full star row.',
      control: 'boolean',
    },
    appearance: {
      description: 'Color of the filled stars.',
      control: 'select',
      options: ['standard', 'accent'],
    },
    text: {
      description: 'Optional text label displayed after the stars (e.g. "(256 reviews)").',
      control: 'text',
    },
    maxValue: {
      description: 'Total number of stars to render. Defaults to 5.',
      control: 'number',
    },
    href: {
      description: 'URL for the link. When set, wraps the rating in an anchor tag.',
      control: 'text',
    },
    target: {
      description: 'Anchor target attribute (e.g. "_blank"). Only used when href is set.',
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    router: {
      description: 'When true, uses router-link instead of an anchor tag.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { modelValue: 3 } }
export const Interactive: Story = { args: { modelValue: 2, readonly: false } }
export const HalfStar: Story = { args: { modelValue: 3.5 } }
export const WithText: Story = { args: { modelValue: 4, text: '(256 reviews)' } }
export const Compact: Story = { args: { modelValue: 4, compact: true, text: '4.0' } }
export const Large: Story = { args: { modelValue: 3, size: 'l' } }
export const LinkedRating: Story = { args: { modelValue: 4, href: 'https://example.com/reviews', text: '(84 reviews)', target: '_blank' } }
