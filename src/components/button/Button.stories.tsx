// import { Story } from '@storybook/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Meta, Canvas } from '@storybook/blocks';
// import * as ComponentStories from './some-component.stories';
import Button, { ButtonVariants } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: 'select' },
    },
    active: { control: 'boolean' },
    activeTheme: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  variant: ButtonVariants.green,
};
export const Red = Template.bind({});
Red.args = {
  children: 'Red Button',
  variant: ButtonVariants.red,
};
export const Blue = Template.bind({});
Blue.args = {
  children: 'Blue Button',
  variant: ButtonVariants.blue,
};
export const Light = Template.bind({});
Light.args = {
  children: 'Light Button',
  variant: ButtonVariants.light,
};
export const Dark = Template.bind({});
Dark.args = {
  children: 'Dark Button',
  variant: ButtonVariants.dark,
};
export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  children: 'Default Theme Button',
  variant: ButtonVariants.defaultTheme,
};

// import Button from '.';
// import '../button/index.module.scss';

// export default {
//   title: 'UI/Button',
//   component: Button,
//   argTypes: {
//     variant: {
//       type: 'string',
//       description: 'Как вариант',
//       defaultValue: 'primary',
// 			options: ['red', 'green', 'blue'],
//       control: {
// 				type: 'radio',
// 			},
//     },
//   },
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Template = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Press me',
//   variant: 'primary',
// };

// export const Large = Template.bind({});
// Large.args = {
//   children: 'Press me',
//   variant: 'primary',
// };
