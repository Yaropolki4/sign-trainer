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

const SONG_ITEM_HEIGTH = 72;

export const Default: Story = {
  args: {
    songs: testCase,
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.SUCCESS,
    renderSongComponent: song => <div style={{ height: SONG_ITEM_HEIGTH, width: '100%' }}>{JSON.stringify(song)}</div>,
    songItemHeight: SONG_ITEM_HEIGTH,
  },
};

export const EmptyList: Story = {
  args: {
    songs: [],
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    renderSongComponent: song => <div style={{ height: SONG_ITEM_HEIGTH, width: '100%' }}>{JSON.stringify(song)}</div>,
    songItemHeight: SONG_ITEM_HEIGTH,
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
    renderSongComponent: song => <div style={{ height: SONG_ITEM_HEIGTH, width: '100%' }}>{JSON.stringify(song)}</div>,
    songItemHeight: SONG_ITEM_HEIGTH,
  },
  //@ts-ignore
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
    renderSongComponent: song => <div style={{ height: SONG_ITEM_HEIGTH, width: '100%' }}>{JSON.stringify(song)}</div>,
    songItemHeight: SONG_ITEM_HEIGTH,
  },
};

export const Error: Story = {
  args: {
    songs: [],
    songWidth: 300,
    listHeight: 500,
    emptyScreen: <div>Empty screen</div>,
    status: LoadStatus.ERROR,
    renderSongComponent: song => <div style={{ height: SONG_ITEM_HEIGTH, width: '100%' }}>{JSON.stringify(song)}</div>,
    songItemHeight: SONG_ITEM_HEIGTH,
  },
};
