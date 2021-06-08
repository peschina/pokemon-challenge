# Pokemon searcher

A simple responsive web app with a search engine, that given a Pokemon name, returns its description. Pokemon searched can be saved in a persistent favourites list.

[PokeApi](https://pokeapi.co/) service is used to fetch Pokemons' description.

## How to run it

### Docker Compose

Requirements:

- [Docker Compose](https://docs.docker.com/compose/install/) (v. 1.29.2) and [Docker Engine](https://docs.docker.com/engine/install/).

Clone the project on your local machine and navigate to the project folder. Run in a terminal:
```
docker-compose up -d
```

then open your browser and navigate to http://localhost:5000.

If something goes wrong you can stop the process with
```
docker-compose down
```
and try running the applications with just Docker

### Docker

Requirements:

- [Docker Engine](https://docs.docker.com/engine/install/).

Clone the project on your local machine, navigate to the backend folder inside the project folder, open a terminal and run:
```
docker build . -t node-pokemon-app
docker run -p 3000:3000 -d node-pokemon-app
```
navigate to the frontend folder and run:
```
docker build . -t pokemon-ui
docker run -p 5000:5000 -d pokemon-ui
```
Open your browser and navigate to http://localhost:5000

### Locally

Requirements:

- [Node.js](https://nodejs.org/en/). It's recommended that you use the LTS version.

Clone the project on your local machine and navigate to the backend folder inside the project folder. Open a terminal and run:
```
npm i
npm run start
```
Open another terminal, navigate to the frontend folder and run:
```
npm i
npm run dev
```
Open your browser and navigate to http://localhost:5000

## How to test

Tests are executed locally. Open a terminal and navigate to the backend folder or to the frontend folder (depending on what you want to test).
If you haven't installed node modules yet, run:

```
npm i
```

then run to execute tests:

```
npm run test
```

## Project details

This project is composed of:

- A frontend app developed with [Svelte](https://svelte.dev/).
- A backend app developed with [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/)

### Backend

- Logs are created and stored with [Winston](https://github.com/winstonjs/winston). In this project the transport is a File, and there are three different files for errors, exceptions and rejections
- [Jest](https://jestjs.io/) is used for testing
- Requests to [PokeApi](https://pokeapi.co/) are implemented with [Node-fetch](https://www.npmjs.com/package/node-fetch), as a leaner and more readable alternative than HTTP module
- Assuming that the application is running, you can open your browser, navigate to http://localhost:3000/api-docs/ and look at the API documentation created with [Swagger](https://swagger.io/)

### Frontend

- Favourite pokemons are persisted with [svelte-persistent-store](https://github.com/andsala/svelte-persistent-store), a plugin to persist [svelte stores](https://svelte.dev/docs#svelte_store) in localStorage.
- Strings searched are cached here on the frontend for simplicity.
- Tests are accomplished with [Jest](https://jestjs.io/) and [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro)
- [Rollup](https://rollupjs.org/guide/en/) is the module bundler used
- Code is compiled with [Babel](https://babeljs.io/)
- Checks for unused CSS and compiler errors are executed with [Svelte Check](https://www.npmjs.com/package/svelte-check). You can also execute just the checks running `npm run svelte-check`
- Routing is implemented with [svelte-routing](https://www.npmjs.com/package/svelte-routing), a declarative Svelte routing library
- Please notice that Internet Explorer is <ins>not</ins> supported.

## Improvement ideas

- Assuming that the API exposed by the backend application could be called by multiple frontend apps, it would be wise to add a cache on the backend too
- [Morgan](https://www.npmjs.com/package/morgan) could be added for some nice HTTP request logs
- Winston (the logger) could be used in a more extensive way, logging different levels of information and on more transports
- Code coverage could be improved
- E2e tests
- Increase cross-browser support
- It would be cool to create a custom component for displaying Icons using svg elements
- Using [Autoprefixer](https://www.npmjs.com/package/autoprefixer) plugin to add vendor prefixes to CSS rules
- Staging and production environments are set up on the frontend application, but not on the backend

## Credits

- Icons displayed are imported from [Material Icons](https://fonts.google.com/icons)
- Spinner displayed when loading is taken from [Pure CSS Loader](https://loading.io/css/)
