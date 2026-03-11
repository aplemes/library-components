import type { Meta, StoryObj } from '@storybook/vue3'
import AccordionList from './index.vue'
import AccordionListItem from '../../AccordionListItem/src/index.vue'

const meta: Meta<typeof AccordionList> = {
  title: 'Components/AccordionList',
  component: AccordionList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AccordionList organizes content into collapsible sections, allowing users to show or hide related information within a vertically stacked layout.',
      },
    },
  },
  argTypes: {
    appearance: {
      description: 'Visual appearance of the accordion list.',
      control: 'select',
      options: ['primary', 'bordered'],
    },
    behavior: {
      description:
        'Controls whether only one item (single) or multiple items (multiple) can be open at a time.',
      control: 'select',
      options: ['single', 'multiple'],
    },
    modelValue: {
      description: 'ID(s) of the currently open accordion item(s).',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList behavior="single">
        <AccordionListItem id="item1" title="What is Mozaic?" content="Mozaic is a design system." />
        <AccordionListItem id="item2" title="How to use it?" content="Import components and use them in your Vue app." />
        <AccordionListItem id="item3" title="Is it free?" content="Yes, it is open source." />
      </AccordionList>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList behavior="multiple">
        <AccordionListItem id="item1" title="First Section" content="Content for the first section." />
        <AccordionListItem id="item2" title="Second Section" content="Content for the second section." />
        <AccordionListItem id="item3" title="Third Section" content="Content for the third section." />
      </AccordionList>
    `,
  }),
}

export const WithSubtitle: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList behavior="single">
        <AccordionListItem id="item1" title="Main Title" subtitle="Supporting subtitle text" content="Detailed content here." />
        <AccordionListItem id="item2" title="Another Title" subtitle="Another subtitle" content="More detailed content." />
      </AccordionList>
    `,
  }),
}

export const Bordered: Story = {
  render: () => ({
    components: { AccordionList, AccordionListItem },
    template: `
      <AccordionList appearance="bordered" behavior="single">
        <AccordionListItem id="item1" title="Bordered Item 1" content="Content for bordered item 1." />
        <AccordionListItem id="item2" title="Bordered Item 2" content="Content for bordered item 2." />
      </AccordionList>
    `,
  }),
}
