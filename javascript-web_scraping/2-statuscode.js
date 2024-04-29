#!/usr/bin/node

const request = require ("request");

function getstatus(url) {
    request(url, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`code: ${response.statusCode}`);
        });
}
