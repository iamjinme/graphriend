# Graphriend

## Overview

Graphriend is a test for Geek Development in Medellín, Colombia; a Mini Social Network for show friends like nodes or graphs. This project use Clementine.js: a lightweight boilerplate for fullstack JavaScript development which utilizes MongoDB, Express and Node.js.

# Quick Start Guide

### Prerequisites

In order to use Clementine.js, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install Graphriend, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/mirabalj/graphriend.git your-project
```

To install the dependencies, enter the following in your terminal:

```
$ cd your-project
$ npm install
```

This will install the Graphriend components into the `your-project` directory.

### Local Environment Variables

Create a file named `.env` in the root directory. This file should contain:

```
MONGO_URI=mongodb://localhost:27017/your-database
PORT=8080
```

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!

## Contributing

This is an open-source project, and contributions are always welcome!

## TODO

- Change EJS + JQuery by AngularJS, or React.
- Use a library like [Async](https://github.com/caolan/async) to improve code in call nested to models.
- Separate login functions in other controller? Can be.
- Any idea to add quality and performance to application.

## Time of development
*9 hrs 37 mins 54 secs* and counting... check in [Wakatime](9 hrs 37 mins 54 secs)

## Credits

* **Jinme Mirabal** - *All the work, except Clementine.js* - [Portfolio in Codepen.io](http://codepen.io/mirabalj/)

## License

MIT License. [Click here for more information.](LICENSE.md)
