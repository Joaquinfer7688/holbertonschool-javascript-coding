#!/usr/bin/node

const request = require("request");
const url = process.argv[2];

request.get(url, { json: true }, (err, response, body) => {
    if (err) {
        console.error(err);
    }
    const taskCompleted = {};
    body.forEach(task => {
        if(task.completed) {
            if(!taskCompleted[task.userId]) {
                taskCompleted[task.userId] = 0;
            }
            taskCompleted[task.userId]++
        }
    });
    console.log(taskCompleted);
});
