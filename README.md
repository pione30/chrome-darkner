# chrome-darkener

  Darken current page. [Chrome Web Store link](https://chrome.google.com/webstore/detail/chrome-darkener/kmondopnmblnlbaiknnjfjdemohffljl)

## How to build

  Install dependencies:

  ```Shell
  npm install
  ```

  For development

  ```Shell
  npm run dev
  ```

  "dist" is the directory to load via chrome://extensions.

  Any changes in "dist" are automatically detected and the extension is hot-reloaded thanks to [crx-hotreload](https://github.com/xpl/crx-hotreload).

  For production

  ```Shell
  npm run prod
  ```
