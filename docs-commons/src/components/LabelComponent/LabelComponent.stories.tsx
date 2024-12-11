import type { Meta, StoryObj } from '@storybook/react';

import LabelComponent from './LabelComponent';

const meta = {
  component: LabelComponent,
} satisfies Meta<typeof LabelComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};