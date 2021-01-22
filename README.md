# Fontsource Search Directory

[![GitHub workflow status](https://img.shields.io/github/workflow/status/fontsource/search-directory/Publish%20Website)](https://github.com/fontsource/search-directory/actions?query=workflow%3A%22Publish+Website%22) [![license](https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/fontsource/fontsource-search-directory.svg?style=social&label=Star)](https://github.com/fontsource/search-directory/stargazers)

A search directory website for the [Fontsource monorepo](https://github.com/fontsource/fontsource).

Directory link can be found [here](https://fontsource.github.io/search-directory/).

## Development

Node.js and NPM must be installed before starting.

Install the necessary packages by running `npm ci` in the project root directory.

### Building

To build, run `npm run build` in the projects root directory. An **index.html** file will be generated in the **./dist** directory. You can open that to view the product.

### Develop

To start development, run `npm start` in the project root directory. This will create a local server in which you can view the project from a browser. Any changes from the source files in the **./src** directory, will automatically reload the page.

## Built With

- [Babel](https://babeljs.io/) - Used to compile Javascript in a way that increases backwards compatibility.
- [ESLint](https://eslint.org/) - Used to enforce a certain coding style and correct syntax.
- [Material-UI](https://material-ui.com/) - Used to create a smooth user interface based off [Google’s Material Design](https://material.io/).
- [Prettier](https://prettier.io/) - Used to format code in an efficient manner.
- [React](https://reactjs.org/) - Used to build and create reusable UI components.
- [Webpack](https://webpack.js.org/) - Used to bundle modules into a browser ready format.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
