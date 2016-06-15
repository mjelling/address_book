//entry router
var express = require('express');
var router = express.Router();
var entry = require('../../models/entry.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('woo');
  Entry.find(function(err, entries) {
    if (err) {
      next(err);
    }else {
      res.json(entries);
    }
  })
});

router.get('/:userID', function(req, res, next) {
  console.log(req.params);
  Entry.find({userID: req.params.userID }, function(err, entries) {
    if (err) {
      next(err);
    }else {
      res.json(entries);
    }
  })
});

router.post('/', function(req, res, next) {
  console.log("entry posting");
  console.log(req.body)
  Entry.create(req.body.entry, function(err, entry) {
    if (err) {
      next(err);
    }else {
      res.json(entry);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  Entry.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      next(err);
    }else {
      res.status(203).end();
    }
  })
});

module.exports = router;
