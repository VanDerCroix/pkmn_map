var models  = require('../models');
var express = require('express');
var router  = express.Router();

/*router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});*/

router.get('/', function(req, res) {
  models.User.findAll().then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

router.get('/map', function(req, res) {
  models.User.findAll().then(function(users) {
    res.render('map', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
