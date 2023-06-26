import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Press me',
    active: true,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'red',
  },
};

// СТАРЫЙ СИНТАКСИС------------------------------------------------------------------------
// import Button from '.';
// import '../button/index.module.scss';

// const meta {
//   title: 'Components/Button',
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

// ВАРИАНТ ВЕРНОГО СИТАКСИСА--------------------------------------------------------------
// import type { Meta, StoryObj } from '@storybook/react';
// import Loader from 'src/components/loader';

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// const meta = {
//   title: 'Components/Loader',
//   component: Loader,
//   tags: ['autodocs'],
//   argTypes: {
//     minLoaderTime: {
//       table: {
//         defaultValue: { summary: 300 },
//       },
//       type: 'number',
//     },
//     isLoading: { defaultValue: { summary: false } },
//     children: {
//       description: '(props: {className: string}) => React.ReactNode',
//     },
//     spinner: {
//       description: 'JSX.Element',
//       type: 'function'
//     },
//     className: { type: 'string' },
//   },
// } satisfies Meta<typeof Loader>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Default: Story = {
//   args: {
//     isLoading: true,
//     children: () => (
//       <>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum
//         facilis quae? Sit nesciunt natus tempora suscipit explicabo, recusandae
//         fugiat beatae! Facere totam exercitationem architecto dolor cumque
//         tempore modi nostrum.
//       </>
//     ),
//   },
// };
 