export const hexToRgb = (hex: string): number[] => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

export function generateGradient(color1: string, color2: string, steps: number) {
  if (steps === 1) {
    return [hexToRgb(color2)];
  }

  const start = hexToRgb(color1);
  const end = hexToRgb(color2);

  const gradient = [];

  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const interpolated = start.map((startChannel, index) => Math.round(startChannel + t * (end[index] - startChannel)));
    gradient.push(interpolated);
  }

  return gradient;
}

export const formatToCssRGB = (rgb: number[]) => {
  if (rgb.length === 3) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`;
};
