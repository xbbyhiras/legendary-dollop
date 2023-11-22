import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Breadcrumbs } from '../../lib/components/Breadcrumbs/Breadcrumbs'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Byhiras/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;
const items = [{ value: 'home' }, { value: 'user' }, { value: 'folder' }]
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FourItems: Story = {
  args: {
    items,
    includeRoot: true,
  },
  play: async ({ canvasElement }) => {
    const breadcrumbs = within(canvasElement).getByRole('navigation');
    const home = within(breadcrumbs).getByText('home');
    const user = within(breadcrumbs).getByText('user');
    const folder = within(breadcrumbs).getByText('folder');

    userEvent.click(home);
    userEvent.click(user);
    userEvent.click(folder);
  }
};

export const FourItems_NoRoot: Story = {
  args: {
    items,
    includeRoot: false,
  },
};

export const ZeroItem: Story = {
  args: {
    items: [],
  },
};

export const ZeroItem_NoRoot: Story = {
  args: {
    items: [],
    includeRoot: false,
  },
};