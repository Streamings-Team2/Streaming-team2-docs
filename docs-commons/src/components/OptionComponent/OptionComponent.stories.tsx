import type { Meta, StoryObj } from '@storybook/react';

import OptionComponent from './OptionComponent';

const meta = {
  component: OptionComponent,
} satisfies Meta<typeof OptionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};