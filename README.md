Passport Intercom Example App
=============================

Example node web app using [passport-intercom](https://github.com/intercom/passport-intercom)


## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone git@github.com:intercom/passport-intercom-example-app.git
$ cd passport-intercom-example-app
$ cp server/_config_example.js server/_config.js
$ npm install
```

Replace `clientID`, `clientSecret`, `callbackURL` with appropriate values after applying for OAuth client details [here](https://app.intercom.io/a/apps/_/settings/oauth).

Start the server.

```bash
$ node server.js
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/)
to see the example in action.


Based on:
http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport/
