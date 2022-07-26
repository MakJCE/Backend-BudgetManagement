# Backend-BudgetManagement

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```console
$ npm install -g express-generator@4
```

  Install dependencies:

```console
$ npm install
```

  Start the server:

```console
$ npm start
```

  View the website at: http://localhost:8500

## Docker commands BD

    docker run -itd --network=bridge -p 5440:5432 -e POSTGRES_PASSWORD=mysecretpassword -d -v postgres-volume:/var/lib/postgresql/data postgres

## Docker commands Backend

    docker build -t full-back:0.1.0 .

    docker run -itd --network=bridge -p 8500:8500 -d -e SERVER_PORT=8500 full-back:0.1.0

## Docker commands Frontend

    docker build -t full-front:0.1.0 .

    docker run -itd --network=bridge -p 3000:3000 -d full-front:0.1.0