import type { Meta, StoryObj } from '@storybook/react';

import PopoverComponent from './PopoverComponent';

const meta = {
  component: PopoverComponent,
} satisfies Meta<typeof PopoverComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};