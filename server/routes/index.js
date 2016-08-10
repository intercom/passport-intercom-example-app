var express = require('express');
var router = express.Router();
var axios = require('axios');
var passportIntercom = require('../auth/intercom');


router.get('/', function(req, res, next) {
  var flash = req.flash();
  var messages = ([]).concat(flash.success || []).concat(flash.failure || []);
  if (req.user) {
    res.render('ic', { title: 'Home for intercom admin', user: req.user, messages: messages });
  } else {
    res.render('index', { title: 'Passport Intercom Example', messages: messages });
  }
});

router.get('/logout', function(req, res, next) {
  req.logout();
  req.flash("success", "Logged Out!")
  res.redirect('/');
});

router.get('/auth/intercom', passportIntercom.authenticate('intercom'));

router.get(
  '/auth/intercom/callback',
  passportIntercom.authenticate('intercom', {
    successRedirect: '/',
    successFlash: 'Succesfully logged in!',
    failureRedirect: '/',
    failureFlash: 'Error authenticating with Intercom...'
  })
);

module.exports = router;
