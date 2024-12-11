import type { Meta, StoryObj } from '@storybook/react';

import PaginationComponent from './PaginationComponent';

const meta = {
  component: PaginationComponent,
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};