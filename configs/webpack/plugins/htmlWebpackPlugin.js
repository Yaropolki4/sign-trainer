import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import fs from 'fs';

export const htmlWebpackPlugin = new HTMLWebpackPlugin({
    templateContent: ({ htmlWebpackPlugin }) => {
      const spritePath = path.join(process.cwd(), './build/app.svg');
      const spriteContent = fs.existsSync(spritePath) ? fs.readFileSync(spritePath, 'utf-8') : '';

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SVG Sprite Example</title>
        </head>
        <body>
          <div style="display: none;">
            ${spriteContent}
          </div>
          <div id="root" />
          <script src="${htmlWebpackPlugin.files.js[0]}"></script>
        </body>
        </html>
      `;
    },
});
