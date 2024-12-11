import type { Meta, StoryObj } from '@storybook/react';

import TableComponent from './TableComponent';

const meta = {
  component: TableComponent,
} satisfies Meta<typeof TableComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};