import { Input } from '@shared/ui';
import { Outlet } from 'react-router';

export const Layout: React.FC = () => {
  return (
    <div className="bg-fill-primary fixed bottom-0 left-0 right-0 top-0">
      <div className="flex flex-row flex-nowrap">
        <div className="bg-fill-secondary flex w-3/12">
          <div className="h-screen">
            <Input />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
