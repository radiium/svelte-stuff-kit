# svxui

A small SvelteJs library for building applications inspired by radix ui

[Documentation and demo](https://svxui.vercel.app/)

## Credits

Some parts of this lib come from the following:  
(thanks to the developers for their incredible work!)

-   [Radix UI](https://www.radix-ui.com/)
-   [sthemer](https://github.com/ivanhofer/sthemer)
-   [svelte-portal](https://github.com/romkor/svelte-portal)
-   [trap-focus-svelte](https://github.com/henrygd/trap-focus-svelte)
-   [clsx](https://github.com/lukeed/clsx)

## Installation

```bash
npm install svxui
pnpm install svxui
yarn add svxui
```

## Developing

```bash
pnpm install
```

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build lib:

```bash
pnpm run package
```

To build doc site and lib:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
pnpm publish
```
