import path from 'path';

export const aliases = {
  '@app': path.resolve(process.cwd(), 'src/app'),
  '@pages': path.resolve(process.cwd(), 'src/pages'),
  '@widgets': path.resolve(process.cwd(), 'src/widgets'),
  '@features': path.resolve(process.cwd(), 'src/features'),
  '@entities': path.resolve(process.cwd(), 'src/entities'),
  '@shared': path.resolve(process.cwd(), 'src/shared'),
};
