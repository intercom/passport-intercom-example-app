Passport Intercom Example App
=============================

Example node web app using [passport-intercom](https://github.com/intercom/passport-intercom)


## Instructions

To install this example on your computer, clone the repository and install
dependencies.

You'll also need a MongoDB instance running.

```bash
$ git clone git@github.com:intercom/passport-intercom-example-app.git
$ cd passport-intercom-example-app
$ cp server/config_example.js server/config.js
$ npm install
```

Replace the `clientID`, `clientSecret`, `callbackURL` values in `server/config.js` appropriately after applying for OAuth client details that you can find in an app's details page in the [Developer Hub](https://app.intercom.io/a/apps/_/developer-hub).

Modify the MongoDB connection URL in `server/app.js` if necessary.

Start the server.

```bash
$ npm start
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/)
to see the example in action.


Based on:
http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport/
