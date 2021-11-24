# Reproduction of ESM require in theme-ui

For some reason, theme ui is getting its cjs file pulled in rather than ESM. This is
problematic since MDX v2 is an ESM module. Weirdly, when HMR kicks in, the imports
work fine so it _might_ also have something to do with Next's SSR handling.

## Steps to reproduce:

- Clone project and cd into it
- yarn nuke
- yarn dev
- open http://localhost:3000

```
error - Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/index.js
require() of ES modules is not supported.
require() of /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/index.js from /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@theme-ui/mdx/dist/theme-ui-mdx.cjs.dev.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/package.json.

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/index.js
require() of ES modules is not supported.
require() of /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/index.js from /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@theme-ui/mdx/dist/theme-ui-mdx.cjs.dev.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@mdx-js/react/package.json.

    at new NodeError (internal/errors.js:322:7)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1102:13)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.<anonymous> (/Users/johno-mini/c/repro-mdx-v2-theme-ui/node_modules/@theme-ui/mdx/dist/theme-ui-mdx.cjs.dev.js:9:15)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'ERR_REQUIRE_ESM'
}
```
