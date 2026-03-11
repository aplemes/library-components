import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Sidebar from './index.vue'
import SidebarHeader from '../../SidebarHeader/src/index.vue'
import SidebarFooter from '../../SidebarFooter/src/index.vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar is a vertical navigation component providing quick access to key sections. It can be expanded or collapsed and supports header, nav, shortcuts, and footer slots.',
      },
    },
  },
  argTypes: {
    modelValue: {
      description: 'Controls the expanded (true) or collapsed (false) state of the sidebar.',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Sidebar, SidebarHeader, SidebarFooter },
    setup() {
      const expanded = ref(true)
      return { expanded }
    },
    template: `
      <div style="height: 400px; display: flex;">
        <Sidebar v-model="expanded">
          <template #header>
            <SidebarHeader>
              <span style="color: white; font-weight: bold;">MyApp</span>
            </SidebarHeader>
          </template>
          <template #nav>
            <li style="color: #ccc; padding: 8px 12px;">Home</li>
            <li style="color: #ccc; padding: 8px 12px;">Products</li>
            <li style="color: #ccc; padding: 8px 12px;">Settings</li>
          </template>
          <template #footer>
            <SidebarFooter>
              <span style="color: #ccc; font-size: 0.875rem;">User Name</span>
            </SidebarFooter>
          </template>
        </Sidebar>
      </div>
    `,
  }),
}

export const Collapsed: Story = {
  render: () => ({
    components: { Sidebar },
    setup() {
      const expanded = ref(false)
      return { expanded }
    },
    template: `
      <div style="height: 400px; display: flex;">
        <Sidebar v-model="expanded">
          <template #nav>
            <li style="color: #ccc; padding: 8px; text-align: center;">🏠</li>
            <li style="color: #ccc; padding: 8px; text-align: center;">📦</li>
            <li style="color: #ccc; padding: 8px; text-align: center;">⚙</li>
          </template>
        </Sidebar>
      </div>
    `,
  }),
}
