const db = require('../connection');

const getAllUrls =  () => {
  return db.query("SELECT * FROM urls").then((data) => {
    return data.rows;
  });
}

const getUrlByShortUrl = (shortUrl) => {
  return db.query("SELECT * FROM urls WHERE shortURL = $1", [shortUrl]).then(data => {
    return data.rows[0];
  })
}





module.exports = {getAllUrls, getUrlByShortUrl};