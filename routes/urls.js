const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  return res.render('url_index');
})

router.get('/:shortURL', (req, res) => {
  return res.render('url_show');
})

module.exports = router;
