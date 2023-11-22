import type { Meta, StoryObj } from '@storybook/react';
import { InlineAlert } from '../../lib/components/Alerts/InlineAlert'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Byhiras/Alerts/InlineAlert',
  component: InlineAlert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    message: {
      description: 'Content of Alert',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithMessageDefault: Story = {
  args: {
    message: 'Inline message',
  }
};
export const WithMessageWarning: Story = {
  args: {
    message: 'Inline message',
    type: 'warning',
  }
};

export const WithMessageError: Story = {
  args: {
    message: 'Inline message',
    type: 'error',
  }
};

export const WithLongMessage: Story = {
  args: {
    message: 'Inline message with a long text that should be wrapped, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
};

export const EmptyMessage: Story = {
  args: {
    message: '',
  },
};
