import type { Meta, StoryObj } from '@storybook/vue3'
import AccordionListItem from './index.vue'
import AccordionList from '../../AccordionList/src/index.vue'

const meta: Meta<typeof AccordionListItem> = {
  title: 'Components/AccordionListItem',
  component: AccordionListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AccordionListItem is a collapsible section used inside an AccordionList. It displays a trigger button with title and optional subtitle, revealing slot content when expanded.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique identifier for the accordion item used for accessibility and state tracking.',
      control: 'text',
    },
    title: {
      description: 'Main heading text displayed as the accordion trigger.',
      control: 'text',
    },
    subtitle: {
      description: 'Optional secondary text displayed below the title.',
      control: 'text',
    },
    icon: {
      description: 'Optional icon string displayed before the title.',
      control: 'text',
    },
    content: {
      description: 'Fallback content text shown when no slot content is provided.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { AccordionList, AccordionListItem },
    setup() { return { args } },
    template: `
      <AccordionList behavior="single">
        <AccordionListItem v-bind="args" />
      </AccordionList>
    `,
  }),
  args: {
    id: 'item1',
    title: 'Accordion Item Title',
    content: 'This is the content revealed when the accordion item is expanded.',
  },
}

export const WithSubtitle: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList behavior="single">
        <AccordionListItem id="item1" title="Item With Subtitle" subtitle="Supporting detail" content="Content is here." />
      </AccordionList>
    `,
  }),
}

export const WithSlotContent: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList behavior="single">
        <AccordionListItem id="item1" title="Custom Slot Content">
          <div style="padding: 8px;">
            <strong>Rich HTML content</strong>
            <p>This content is provided via the default slot.</p>
          </div>
        </AccordionListItem>
      </AccordionList>
    `,
  }),
}
