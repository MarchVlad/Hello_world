const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

let data = 0;

app.get('/hello-world', (request, response) => {
    //data = request.cookies['count'];
    data++;
    response.cookie('count', data, {maxdata: 60});
    response.send(`Count:${request.cookies['count']}`);
    console.log('Cookies:', request.cookies['count']);
})

app.get('/*', function (request, response) {
    response.sendStatus(404); 
});

app.listen(3000);
