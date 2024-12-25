import type { Meta, StoryObj } from '@storybook/react';
import { AjaxImage } from './AjaxImage';
import testImage from './testAssets/test.jpg';
import axios from 'axios';

const meta: Meta<typeof AjaxImage> = {
  component: AjaxImage,
  decorators: [
    Story => (
      <div
        className="flex items-center justify-center"
        style={{ width: 200, height: 200 }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AjaxImage>;

const successRequest = () => {
  return axios.get(testImage, { responseType: 'blob' });
};

export const SuccessImage: Story = {
  args: {
    request: successRequest,
  },
};

const pendingRequest = () => {
  return new Promise<{ data: unknown }>(res => {
    setTimeout(() => {
      res({ data: 0 });
    }, 100000);
  });
};

export const PendingImage: Story = {
  args: {
    //@ts-ignore
    request: pendingRequest,
  },
};

const errorRequest = () => {
  return Promise.reject();
};

export const ErrorImage: Story = {
  args: {
    request: errorRequest,
  },
};
