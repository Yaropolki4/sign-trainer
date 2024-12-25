import {
  SongPreviewModel,
  SongsList,
  getSongsPreviews,
} from '@entities/songPreview';
import { ListTitle } from '@shared/ui/ListTitle';
import { t } from '@shared/i18n';
import React from 'react';
import { Outlet } from 'react-router';
import { Icon } from '@shared/ui/Icon';
import { Divider } from '@shared/ui/Divider';
import { Input } from '@shared/ui';

export const Layout: React.FC = () => {
  const [songs, setSongs] = React.useState<SongPreviewModel[]>([]);

  React.useEffect(() => {
    getSongsPreviews().then(response => {
      setSongs(response.data);
    });
  }, []);

  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = React.useState(0);

  React.useEffect(() => {
    const resizeSidebar = () => {
      const sidebar = sidebarRef.current;

      if (sidebar) {
        setSidebarWidth(sidebar.clientWidth);
      }
    };

    window.addEventListener('resize', resizeSidebar);

    return () => {
      window.removeEventListener('resize', resizeSidebar);
    };
  }, []);

  const emptyScreen = <div>empty screen</div>;
  const leftAddon = <Icon name="recent" size="m" />;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-fill-primary">
      <div className="flex w-full flex-row flex-nowrap">
        <div ref={sidebarRef} className="w-3/12 border-r-1 border-divider">
          <div className="px-3 py-4">
            <Input />
          </div>
          <Divider />
          <ListTitle text={t('sidebar.recent')} leftAddon={leftAddon} />
          <SongsList
            songs={songs}
            songWidth={sidebarWidth}
            emptyScreen={emptyScreen}
            listHeight={window.innerHeight - 113.5}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
