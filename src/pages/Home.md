# Fontsource

[![Generic badge](https://img.shields.io/badge/fontsource-passing-brightgreen)](https://github.com/DecliningLotus/fontsource) [![Monthly Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffontsource%2Fdownload-stat-aggregator%2Fmaster%2Fdata%2FbadgeMonth.json)](https://github.com/fontsource/download-stat-aggregator) [![Total Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffontsource%2Fdownload-stat-aggregator%2Fmaster%2Fdata%2FbadgeTotal.json)](https://github.com/fontsource/download-stat-aggregator) [![License](https://badgen.net/badge/license/MIT/green)](https://github.com/fontsource/fontsource/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/fontsource/fontsource.svg?style=social&label=Star)](https://github.com/fontsource/fontsource/stargazers)

An updating monorepo full of self-hostable Open Source fonts bundled into individual NPM packages!
Inspired by the aging [Typefaces](https://github.com/KyleAMathews/typefaces) project and primarily built using [Google Font Metadata](https://github.com/fontsource/google-font-metadata).

Our supported font search directory can be found [here](https://fontsource.github.io/search-directory/) (in very early development and may contain outdated information) or alternatively in Markdown format [here](https://github.com/fontsource/fontsource/blob/master/FONTLIST.md).

##

- Self-hosting brings _significant performance gains_ as typically loading fonts from hosted font services, such as Google Fonts, lead to an extra (render blocking) network request. To provide perspective, for simple websites it has been seen to _double_ visual load times. Benchmarks can be found [here](https://github.com/HTTPArchive/almanac.httparchive.org/pull/607) and [here](https://github.com/reactiflux/reactiflux.com/pull/21).

- Fonts remain _version locked_. Google often pushes updates to their fonts [without notice](https://github.com/google/fonts/issues/1307), which may interfere with your live production projects. Manage your fonts like any other NPM dependency.

- Your _fonts load offline_. Often there may be situations, like working in an airplane or train, leaving you stranded without access to your online hosted fonts. Have the ability to keep working under any circumstance.

- _Support for fonts outside the Google Font ecosystem_. This repository is constantly evolving with [other Open Source fonts](https://github.com/fontsource/fontsource/blob/master/FONTLIST.md). Feel free to contribute!