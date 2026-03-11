import type { Meta, StoryObj } from '@storybook/vue3'
import Overlay from './index.vue'
const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A full-screen semi-transparent backdrop rendered via `<Teleport>`. Acts as a low-level primitive for dialogs and drawers. The content placed in the default slot is centered over the backdrop. Emits a `click` event when the backdrop area is clicked.',
      },
    },
  },
  argTypes: {
    isVisible: {
      description: 'Controls whether the overlay is visible. When false the overlay is hidden and non-interactive via CSS.',
      control: 'boolean',
    },
    dialogLabel: {
      description: 'Value passed to `aria-labelledby` on the inner dialog element for screen reader accessibility.',
      control: 'text',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Visible: Story = {
  args: { isVisible: true },
  render: (args) => ({ components: { Overlay }, setup() { return { args } }, template: '<Overlay v-bind="args"><div style="background: white; padding: 2rem; border-radius: 8px;">Overlay content</div></Overlay>' }),
}
export const Hidden: Story = { args: { isVisible: false } }
