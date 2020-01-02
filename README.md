# TravelBlog

This is a Travel blog codebase for the personal use.

## Demo

[To see the demo of this template, click here](https://react-csr-template.herokuapp.com)

## Primary Tech stack

- **React**: The primary UI library
- **Redux**: Redux data flow
- **React-redux**: Integrating React with Redux data flow
- **Redux-thunk**: Redux middleware to support asynchronous operations
- **Redux-persist**: Persist and rehydrate a redux store.
- **Redux-pack**: Redux library to extend various stages (start, success, error, finish, always) of API calling
- **React-loadable**: Code splitting
- **React-router-dom**: SPA routing
- **SASS**: CSS pre-processor
- **Axios**: Javascript library to make rest API call
- **React-helmet**: React library to change header metadata and title
- **Node-sass**: SASS CSS pre-processor
- **Jest**: Testing framework and test runner for unit test cases
- **Enzyme**: React component testing utility
- **Webpack**: Webpack module bundler

## Features of this template

- Complete UI architecture
- Centralised HTTP(S) request and response interceptor
- Progressive web app (PWA)
- Webpack based module bundler
- Production and development ready boilerplate code
- Internationalization or localization support with English and German language
- Used React context to implement Internationalization
- Offline support with service worker
- Code splitting with react-loadable
- Redux data flow
- React hooks
- Hot module reloading (HMR) for local development
- React memo to stop redundant rendition
- Error boundary to catch unexpected UI errors
- Modular and functional programming paradigm used
- Common and extensible config
- EsLint for maintaining uniform coding standards
- CSS pre-processor
- Centralised color variables
- Test case setup with Jest
- Redux extension for better local debugging
- Proxy setup to counter CORS issues if any
- Editor config for maintaining the similar coding indentation even if various editors are used across the team

## Quick start: How to run this template

First clone project and install dependencies

```sh
$ mkdir ProjectName && cd ProjectName
$ git clone https://github.com/amit040386/react-csr-template [YOUR APP NAME]
$ cd [YOUR APP NAME]
$ npm install
```

Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config/default.js in root folder and update API Key.

```javascript
{
  API_KEY: 'enter-your-api-key'
}
```

To run on local

```sh
$ npm run start
```
Default port number is 7009

**NOTE**: To change the port, create a .env in root folder and add your port number as follows.

```javascript
PORT=4566
```

or change the port number in this file: server/util/port.js

**NOTE**: If any new locale texts are added, please re-execute the npm start command

## Unit Testing

Use the following commands to execute the test cases

```sh
$ npm run test
```

## Deployment

Deployment build

```sh
$ npm run build
```

You can deploy this project to:

[Heroku](https://www.heroku.com/)

Steps to follow:

```sh
$ heroku create $APP_NAME --buildpack mars/create-react-app
$ git add .
$ git commit -m "Start deploying create-react-app in heroku"
$ git push heroku master
$ heroku open
```

You can do all these from Heroku dashboard as well

## License

This project is licensed under the MIT license, Copyright (c) 2019 Amit Pal. For more information see LICENSE.md.
