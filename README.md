# Svelte template for multiple pages

This is a template for creating multiple Svelte pages that can be compiled and served by any web server.

## Initial setup

After cloning this repository, run the following commands to install all necessary modules and start the development server.

```bash
npm install
npm run dev
```

## Managing webpages

New pages can be created using one of the custom scripts. Replace the `<name>` parameter with a name for the page you want to create.

_Remember that you can change the template files that this script relies on. They can be found in `./src/template/`._

```bash
npm run pages:new -- <name>
```

The script creates folders and files in two places:

- `./public/<name>/` - The public files that will be served to clients. This is where Svelte will be compiled and the `index.html` resides. Changes to `index.html` will affect the page, such as the page title or which icon to be used.
- `./src/pages/<name>/` - The source `.svelte` files.

The `pages:new` script also modifies `rollup.config.js` to make the new page the compilation target. Each page can be individually targeted and compiled seperately. If you create multiple pages you can switch between them using the command below. The page entered into the `<name>` parameter will then become the current compilation target.

```bash
npm run pages:switch -- <name>
```

For each page you create you might want to add a server route that serves the page. The server lives in `./src/server/` where you can add routes for both webpages and API calls.

Whenever you want to delete a page you can do so with the command below.

```bash
npm run pages:delete -- <name>
```
