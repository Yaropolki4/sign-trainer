import { observer } from 'mobx-react-lite';
import { t } from '@shared/i18n';
import { IconButton } from '../IconButton';
import React from 'react';

interface InputProps {
  onChange?(value: string): void;
  renderControls?(): React.ReactNode;
}

const DEFAULT_CONTROLS_PADDING = 8;

export const Input: React.FC<InputProps> = observer(
  ({ onChange, renderControls }) => {
    const [query, setQuery] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setQuery(value);
      onChange?.(value);
    };

    const controlsRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const controls = controlsRef.current;

      if (controls) {
        const controlsWidth = controls.offsetWidth;

        document.documentElement.style.setProperty(
          '--ui-input-controls-width',
          `${controlsWidth + DEFAULT_CONTROLS_PADDING}px`,
        );
      }
    });

    const handleIconButtonClick = React.useCallback(() => {
      setQuery('');
      onChange?.('');
    }, [onChange]);

    return (
      <div className="relative flex w-full items-center">
        <input
          type="text"
          className="ui-input active:fill-active-secondary h-9 flex-grow rounded-md bg-fill-secondary py-2.5 pl-3 pr-[var(--ui-input-controls-width)] placeholder:text-secondary hover:bg-fill-hover-secondary focus:shadow-accent focus:outline-none"
          placeholder={t('search.placeholder')}
          value={query}
          onChange={handleChange}
        />
        <div
          ref={controlsRef}
          className="absolute right-0 flex flex-row pr-2.5"
        >
          {renderControls?.()}
          {query ? (
            <div className="ml-3 flex items-center">
              <IconButton
                onClick={handleIconButtonClick}
                name="close"
                transparent
                paddingless
                size="s"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);
