import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "../../lib/components/Article/Article";
import licence from "./assets/licence.md?raw";
import { Markdown } from "../utils/Markdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Byhiras/Article",
  component: Article,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ArticleWithScroll: Story = {
  args: {
    children:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    enableScrolls: true,
  },
};
export const ArticleWithScrollNonStandalone: Story = {
  args: {
    children: <Markdown>{licence}</Markdown>,
    className: "non-standalone",
    enableScrolls: true,
  },
};

export const ArticleWithoutScroll: Story = {
  args: {
    children: <Markdown>{licence}</Markdown>,
    enableScrolls: false,
  },
};
