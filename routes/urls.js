const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const urlsHelpers = require('../db/queries/urls');

console.log(urlsHelpers);

router.get('/', (req, res) => {
  db.query('SELECT * FROM urls').then(data => {
    console.log(data.rows);
    const templateVars = {urls: data.rows};
    return res.render('url_index', templateVars);
  })
})

router.get('/:shortURL', (req, res) => {
  urlsHelpers.getUrlByShortUrl(req.params.shortURL).then(data => {
    console.log(data);
    return res.render('url_show');
  })
})

module.exports = router;
