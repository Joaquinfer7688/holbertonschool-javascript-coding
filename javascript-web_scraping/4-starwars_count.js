#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    try {
      const films = JSON.parse(body).results;
      let cont = 0;
      films.forEach(film => {
        if (film.characters.some(character => character.includes('18'))) {
          cont++;
        }
      });
      console.log(cont);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
