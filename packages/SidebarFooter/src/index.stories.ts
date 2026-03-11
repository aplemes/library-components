import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SidebarFooter from './index.vue'

const meta: Meta<typeof SidebarFooter> = {
  title: 'Components/SidebarFooter',
  component: SidebarFooter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarFooter renders the footer area of a Sidebar, typically containing user profile information, settings links, or account actions.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarFooter },
    setup() {
      const expanded = ref(true)
      return { expanded }
    },
    template: `
      <div style="background: #191919; width: 256px; height: 200px; display: flex; flex-direction: column; justify-content: flex-end;">
        <SidebarFooter>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: #007a3e; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; flex-shrink: 0;">JD</div>
            <div>
              <p style="margin: 0; color: white; font-size: 0.875rem; font-weight: 500;">John Doe</p>
              <p style="margin: 0; color: #999; font-size: 0.75rem;">Admin</p>
            </div>
          </div>
        </SidebarFooter>
      </div>
    `,
  }),
}
