import type { Meta, StoryObj } from '@storybook/react';
import { SongsList } from './SongsList';
import testCase from './testCases/songsList.json';
import { within } from '@storybook/test';
import { LoadStatus } from '@shared/api';

const meta: Meta<typeof SongsList> = {
  component: SongsList,
};

export default meta;

type Story = StoryObj<typeof SongsList>;

export const Default: Story = {
  args: {
    songs: testCase,
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.SUCCESS,
  },
};

export const EmptyList: Story = {
  args: {
    songs: [],
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.SUCCESS,
  },
};

export const ScrollList: Story = {
  args: {
    songs: testCase,
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.SUCCESS,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const scrollerContainer = canvas.getByRole('list');
    const scroller = scrollerContainer.childNodes?.[0] as HTMLDivElement;

    await scroller.scrollBy(0, 200);
  },
};

export const Loading: Story = {
  args: {
    songs: [],
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.LOADING,
  },
};

export const Error: Story = {
  args: {
    songs: [],
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.ERROR,
  },
};
