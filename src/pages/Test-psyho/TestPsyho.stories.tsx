import type { Meta, StoryObj } from '@storybook/react';
import TestPsyho from './TestPsyho';
// import { type } from '@testing-library/user-event/dist/type';

const meta = {
  title: 'Components/Test',
  component: TestPsyho,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestName: Story = {
  
};
