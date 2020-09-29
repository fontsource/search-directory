# Fontsource Search

A search directory website for the [Fontsource monorepo](https://github.com/fontsource/fontsource).

## Development

Nodejs and npm must be installed before starting.

Install the nessesary packages by running `npm ci` in the projects root directory.

### Building

To build, run `npm run build` in the projects root directory. An **index.html** file will be generated in the **./build** directory. You can open that to view the product.

### Development

To start development run `npm start` in the projects root directory. This will create a local server in which you can view the project from a browser. Any changes from the source files in the **./src** directory, will automatically reload the page.

## Built With

* [Babel](https://babeljs.io/) - Used to compile javascript in a way that increases backwards compatibility.
* [ESLint](https://eslint.org/) - Used to enforce a certain coding style and correct syntax.
* [Material-UI](https://material-ui.com/) - Used to create a smooth user interface based off of [Google’s Material Design](https://material.io/).
* [Prettier](https://prettier.io/) - Used to format code in an efficient manner.
* [React](https://reactjs.org/) - Used to the build and create reusable ui components.
* [Webpack](https://webpack.js.org/) - Used to bundle modules into a browser ready format.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
