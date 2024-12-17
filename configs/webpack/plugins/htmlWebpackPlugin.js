import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import fs from 'fs';

function formatTags(tags) {
  return tags.reduce((item, index) => {
    if (index === tags.length - 1) {
      return item;
    }

    return item + '\n';
  }, '');
}

export const htmlWebpackPlugin = new HTMLWebpackPlugin({
    templateContent: ({ htmlWebpackPlugin }) => {
      const spritePath = path.join(process.cwd(), './build/app.svg');
      const spriteContent = fs.existsSync(spritePath) ? fs.readFileSync(spritePath, 'utf-8') : '';
      const cssTags = htmlWebpackPlugin.files.css.map((css) => {
        return `<link href="${css}" rel="stylesheet">`
      });

      const scriptTags = htmlWebpackPlugin.files.js.map((js) => {
        return `<script src="${js}"></script>`
      });

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SVG Sprite Example</title>
          ${formatTags(cssTags)}
        </head>
        <body>
          <div style="display: none;">
            ${spriteContent}
          </div>
          <div id="root" />
          ${formatTags(scriptTags)}
        </body>
        </html>
      `;
    },
});
