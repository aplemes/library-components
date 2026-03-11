import type { Meta, StoryObj } from '@storybook/vue3'
import QuantitySelector from './index.vue'
const meta: Meta<typeof QuantitySelector> = {
  title: 'Form/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['s', 'm'] }, disabled: { control: 'boolean' }, isInvalid: { control: 'boolean' }, readonly: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { id: 'qty-default', modelValue: 1, min: 1, max: 10 } }
export const WithStep: Story = { args: { id: 'qty-step', modelValue: 5, min: 0, max: 100, step: 5 } }
export const Small: Story = { args: { id: 'qty-small', size: 's', modelValue: 1 } }
export const Disabled: Story = { args: { id: 'qty-disabled', modelValue: 3, disabled: true } }
export const Invalid: Story = { args: { id: 'qty-invalid', modelValue: 0, isInvalid: true } }
