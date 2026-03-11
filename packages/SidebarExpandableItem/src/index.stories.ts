import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarExpandableItem from './index.vue'
import SidebarNavItem from '../../SidebarNavItem/src/index.vue'

const meta: Meta<typeof SidebarExpandableItem> = {
  title: 'Components/SidebarExpandableItem',
  component: SidebarExpandableItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarExpandableItem renders a collapsible sidebar item that can show or hide a nested list of sub-items. It toggles on click and supports an optional icon slot.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text label displayed for the expandable item.',
      control: 'text',
    },
    active: {
      description: 'Marks the item as active, applying active styling.',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarExpandableItem, SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarExpandableItem label="Settings">
          <SidebarNavItem label="General" href="/settings/general" />
          <SidebarNavItem label="Security" href="/settings/security" />
          <SidebarNavItem label="Notifications" href="/settings/notifications" />
        </SidebarExpandableItem>
      </ul>
    `,
  }),
}

export const Active: Story = {
  render: () => ({
    components: { SidebarExpandableItem, SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarExpandableItem label="Products" :active="true">
          <SidebarNavItem label="All Products" href="/products" />
          <SidebarNavItem label="Categories" href="/products/categories" :active="true" />
        </SidebarExpandableItem>
      </ul>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { SidebarExpandableItem, SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarExpandableItem label="Administration">
          <template #icon>⚙</template>
          <SidebarNavItem label="Users" href="/admin/users" />
          <SidebarNavItem label="Roles" href="/admin/roles" />
        </SidebarExpandableItem>
      </ul>
    `,
  }),
}
