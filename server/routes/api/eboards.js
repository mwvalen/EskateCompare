var router = require('express').Router();
var mongoose = require('mongoose');

var Eboard = mongoose.model('Eboard')

router.get('/:slug', async function(req, res, next) {
  Eboard.findOne({ slug : req.params.slug }).then(function(eboard) {
    if (!eboard) {return res.sendStatus(404); }

    return res.json({ eboard: eboard });
  })
})



module.exports = router;
