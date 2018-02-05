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
      title: 'Lima Map',
      users: users
    });
  });
});

router.get('/map', function(req, res) {
  // models.User.findAll().then(function(users) {
    res.render('map', {
      title: 'Map, static loading'
    });
  // });
});

router.get('/map2', function(req, res) {
  // models.User.findAll().then(function(users) {
    var gyms_file = require('../public/gyms.json');
    var parks_file = require('../public/parks.json');
    // var gyms_file = { type: "holi", arr: "g" };
    res.render('map2', {
      title: 'Map, dynamic loading',
      gyms_file: JSON.stringify(gyms_file),
      parks_file: JSON.stringify(parks_file)
    });
  // });
});

module.exports = router;
