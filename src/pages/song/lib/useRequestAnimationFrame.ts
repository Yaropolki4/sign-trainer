import React from 'react';

export const useRequestAnimationFrame = (
  handlers: {
    onAnimationTick: (time: number) => void;
    onReset: () => void;
  },
  duration: number,
  resetDeps: string[],
) => {
  const { onAnimationTick, onReset } = handlers;
  const [active, setActive] = React.useState(false);
  const [time, setTime] = React.useState({ value: 0 });

  React.useEffect(() => {
    if (!active) {
      return;
    }

    const date = Date.now();

    requestAnimationFrame(() => {
      const deltaTime = Date.now() - date;

      if (time.value >= duration) {
        return;
      }

      onAnimationTick(time.value);
      setTime(prev => ({ value: prev.value + deltaTime }));
    });
  }, [time, active, duration, onAnimationTick]);

  const resetAnimation = React.useCallback(() => {
    setTime({ value: 0 });
    setActive(false);

    requestAnimationFrame(() => {
      onReset();
    });
  }, [onReset]);

  React.useEffect(() => {
    resetAnimation();
  }, [resetAnimation, ...resetDeps]);

  React.useEffect(() => {}, [active]);

  return {
    setActive,
    resetAnimation,
    isAnimationActive: active,
    time,
  };
};
