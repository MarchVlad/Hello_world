const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

let data = 0;

app.use('/hello-worlds', (request, response) => {
    let count = 0;
    response.cookie('count', count).send();
})

app.get('/hello-world', (request, response) => {
    console.log(data);
    data = request.cookies['count'];
    console.log(data);
    data++;
    response.cookie('count', data);
    //response.clearCookie('count');
    response.send(`Count:${request.cookies['count']}`);
    console.log('Cookies:', request.cookies);
})

app.get('/*', function (request, response) {
    response.sendStatus(404); 
});

app.listen(3000);
