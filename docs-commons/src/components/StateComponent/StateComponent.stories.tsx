import type { Meta, StoryObj } from '@storybook/react';

import StateComponent from './StateComponent';

const meta = {
  component: StateComponent,
} satisfies Meta<typeof StateComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};