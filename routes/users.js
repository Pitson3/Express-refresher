var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  //res.send("Hello, Pitson?");

  res.json([
    {
      id: 2,
      username: "Pitson 3",
      Sex: 'male'
    },
    {
      id: 4,
      username: "Liveness 3",
      Sex: 'female'
    }
  ]);
});

module.exports = router;
