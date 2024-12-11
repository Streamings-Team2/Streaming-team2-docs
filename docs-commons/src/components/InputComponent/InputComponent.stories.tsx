import type { Meta, StoryObj } from '@storybook/react';

import InputComponent from './InputComponent';

const meta = {
  component: InputComponent,
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};