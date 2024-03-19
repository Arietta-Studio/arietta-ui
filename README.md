<a name="readme-top"></a>

<div align="center">

<img height="130" src="https://unpkg.com/@arietta-studio/assets-logo@latest/assets/logo-3d.webp" style="vertical-align: middle;">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg" style="vertical-align: middle;">
<img height="130" src="https://unpkg.com/@arietta-studio/assets-emoji@latest/assets/lollipop.webp" style="vertical-align: middle;">

<h1>Arietta UI</h1>

Arietta UI is an open-source UI component library for building amazing web apps

English ・ [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]
[![][vercel-shield]][vercel-link]
[![][discord-shield]][discord-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[![][banner]][vercel-link]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with NextJS](#compile-with-nextjs)
- [🤯 Usage](#-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🩷 Sponsor](#-sponsor)

####

</details>

## 📦 Installation

> \[!IMPORTANT]\
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install Arietta UI, run the following command:

[![][bun-shield]][bun-link]

```bash
$ bun add @arietta-studio/ui
```

### Compile with NextJS

> \[!NOTE]\
> By work correct with nextjs page router SSR, add `transpilePackages: ['@arietta-studio/ui']` to `next.config.js`. For example:

```js
// next.config.js
const nextConfig = {
  // ...other config

  transpilePackages: ['@arietta-studio/ui'],
};
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

> \[!NOTE]\
> The Arietta UI components are developed based on [Antd](https://ant.design/components/overview/), fully compatible with Antd components,
> and it is recommended to use [antd-style](https://ant-design.github.io/antd-style/) as the default css-in-js styling solution.

```tsx
import { ThemeProvider, Button } from '@arietta-studio/ui'
import { Button } from 'antd'

export default () => (
  <ThemeProvider>
    <Button>Hello Arietta</Button>
  </ThemeProvider>
)
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
$ git clone https://github.com/arietta-studio/arietta-ui.git
$ cd arietta-ui
$ bun install
$ bun start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🩷 Sponsor

Every bit counts and your one-time donation sparkles in our galaxy of support! You're a shooting star, making a swift and bright impact on our journey. Thank you for believing in us – your generosity guides us toward our mission, one brilliant flash at a time.

<a href="https://opencollective.com/arietta-studio" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/arietta-studio/.github/blob/master/static/sponsor-dark.png?raw=true">
    <img  src="https://github.com/arietta-studio/.github/blob/master/static/sponsor-light.png?raw=true">
  </picture>
</a>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-link]

</details>

Copyright © 2024 [Arietta Studio][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[banner]: https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/268452017-960ab8a1-e4b7-4648-beb1-77daf4b6034a.png
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[codespaces-link]: https://codespaces.new/arietta-studio/arietta-ui
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=arietta-studio/arietta-ui
[contributors-link]: https://github.com/arietta-studio/arietta-ui/graphs/contributors
[discord-link]: https://discord.gg/
[discord-shield]: https://img.shields.io/discord/{id}?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Farietta-studio%2Farietta-ui
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Farietta-studio%2Farietta-ui.svg?type=large
[github-action-release-link]: https://github.com/actions/workflows/arietta-studio/arietta-ui/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/arietta-ui/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/arietta-studio/arietta-ui/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/arietta-studio/arietta-ui/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/arietta-studio/arietta-ui/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/arietta-studio/arietta-ui?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/arietta-studio/arietta-ui/network/members
[github-forks-shield]: https://img.shields.io/github/forks/arietta-studio/arietta-ui?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/arietta-studio/arietta-ui/issues
[github-issues-shield]: https://img.shields.io/github/issues/arietta-studio/arietta-ui?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/arietta-studio/arietta-ui/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/arietta-studio/arietta-ui?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/arietta-studio/arietta-ui/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/arietta-studio/arietta-ui?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/arietta-studio/arietta-ui/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/arietta-studio/arietta-ui?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@arietta-studio/ui
[npm-downloads-shield]: https://img.shields.io/npm/dt/@arietta-studio/ui?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@arietta-studio/ui
[npm-release-shield]: https://img.shields.io/npm/v/@arietta-studio/ui?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/arietta-studio/arietta-chat/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🤯_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/arietta-studio
[vercel-link]: https://ui.arietta-studio.ai
[vercel-shield]: https://img.shields.io/website?down_message=offline&label=vercel&labelColor=black&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fui.arietta-studio.ai
