var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.send({
    ok: true,
    req: req.body
  });
});

module.exports = router;
