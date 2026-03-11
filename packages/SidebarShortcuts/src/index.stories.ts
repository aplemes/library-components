import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarShortcuts from './index.vue'
import SidebarShortcutItem from '../../SidebarShortcutItem/src/index.vue'

const meta: Meta<typeof SidebarShortcuts> = {
  title: 'Components/SidebarShortcuts',
  component: SidebarShortcuts,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarShortcuts is a container for shortcut navigation items in the sidebar. It provides a structured area for quick-access links using SidebarShortcutItem components.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarShortcuts, SidebarShortcutItem },
    template: `
      <div style="background: #191919; width: 256px;">
        <SidebarShortcuts>
          <SidebarShortcutItem label="Dashboard" href="/dashboard">
            <template #icon>📊</template>
          </SidebarShortcutItem>
          <SidebarShortcutItem label="Orders" href="/orders" :active="true">
            <template #icon>📦</template>
          </SidebarShortcutItem>
          <SidebarShortcutItem label="Analytics" href="/analytics">
            <template #icon>📈</template>
          </SidebarShortcutItem>
        </SidebarShortcuts>
      </div>
    `,
  }),
}
