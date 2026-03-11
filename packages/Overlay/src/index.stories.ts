import type { Meta, StoryObj } from '@storybook/vue3'
import Overlay from './index.vue'
const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: { isVisible: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof meta>
export const Visible: Story = {
  args: { isVisible: true },
  render: (args) => ({ components: { Overlay }, setup() { return { args } }, template: '<Overlay v-bind="args"><div style="background: white; padding: 2rem; border-radius: 8px;">Overlay content</div></Overlay>' }),
}
export const Hidden: Story = { args: { isVisible: false } }
