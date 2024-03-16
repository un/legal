# Unproprietary Corporation - legal docs

This repo and the site at https://legal.u22n.com hold the public legal docs applicable to all managed services offered publicly by the Unproprietary Corporation.

A list of applicable domains for all Unproprietary Corporation services is available in `domains.json` at the root of this repository.

Any services on domains not within the `domains.json` file are not covered by these documents, and are considered 3rd party instances of Unproprietary Corporation's open source code.

# Document History

Any and changes to our legal documents are committed to this repository using git (a version control system).

This lets you see all historical changes that have been to the documents, with clear indications of what lines in the documents have changed when.

To view the history of the document, select it from the file browser above within the `content` folder, then click "History" in the top right hand corner.

Once there, you can select any commit (version) to see what changed between it and the previous one.

# Documents

- Terms & Conditions
- Privacy Policy
- Cookie Policy
- Data Processing Addendum

## Cloning this repo

This repo is released under MIT license.
When cloning the repo, please ensure you change all corporate name refrences and all domains.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/projects/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
