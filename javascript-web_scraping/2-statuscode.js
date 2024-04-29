#!/usr/bin/node

const request = require("request");

function getstatus (url) {
    request.get(url, (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`code: ${response.statusCode}`);
        });
}
