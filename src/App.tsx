import { t } from './shared/i18n';

const App = () => {
  return (
    <div className="container">
      <a
        href="#"
        className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3 text-primary">
          <h3 className="text-secondary text-sm font-semibold text-slate-900 group-hover:text-white">
            {t('welcome.ddd')}
          </h3>
        </div>
        <p className="text-sm text-slate-500 group-hover:text-white">
          {t('description')}
        </p>
      </a>
    </div>
  );
};

export default App;
