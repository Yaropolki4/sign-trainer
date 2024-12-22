import { Outlet } from 'react-router';

export const Layout: React.FC = () => {
  return (
    <div className="bg-fill-primary fixed bottom-0 left-0 right-0 top-0">
      <div className="flex w-full flex-row flex-nowrap">
        <div className="w-3/12"></div>
        <Outlet />
      </div>
    </div>
  );
};
