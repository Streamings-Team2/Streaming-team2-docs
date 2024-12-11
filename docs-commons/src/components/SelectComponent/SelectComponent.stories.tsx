import type { Meta, StoryObj } from '@storybook/react';

import SelectComponent from './SelectComponent';

const meta = {
  component: SelectComponent,
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};