# ALC's ESLint config

[![NPM](https://nodei.co/npm/eslint-config-alc.png?compact=true)](https://npmjs.org/package/eslint-config-alc)

This is my preferred set of ESLint rules, bundled up into a single ESLint config. Suitable for
**React JS** and **Node** development. Aimed at ESLint v5, but should work with v4.

I liked the baseline set of rules that Netflix use in their DEA eslint config package
([eslint-config-netflix-dea](https://github.com/Netflix/eslint-config-netflix-dea))
but I wanted something a little stricter. I found their package was a good, sensible
starting point for me to built atop with some of the rules I felt were missing.

## Installation

Install it as a local package along with ESLint itself via NPM:

```sh
npm i -D eslint eslint-config-alc
```

Or Yarn:

```sh
yarn add -D eslint eslint-config-alc
```

Then create yourself an `.eslintrc` file that extends the config:

```json
{
  "extends": ["alc"]
}
```

And off you go! ✨

## Rules

I created this package to enforce some rules I prefer using in projects. It extends the
[Netflix DEA ESLint config package](https://github.com/Netflix/eslint-config-netflix-dea)
and adds a few additional rules on top to make the config a bit stricter. From experience
I've learned that stricter settings overall produce more consistent code. However, I don't
think I went too overboard and in general this config should be relatively painless to use.

Have a look inside `index.js` to see what rules I've added over and above Netflixes base
DEA config.
