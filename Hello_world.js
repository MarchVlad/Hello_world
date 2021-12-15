const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

let data = '0';

app.get('/hello-world', (request, response) => {
    
    response.cookie('count', data);
    data = request.cookies['count'];
    data = Number(data) + 1;
    response.cookie('count', data);
    console.log('Cookies:', data);
    //response.clearCookie('count');
    response.send(`Count:${data}`);
})

app.get('/*', function (request, response) {
    response.sendStatus(404); 
});

app.listen(3000);
