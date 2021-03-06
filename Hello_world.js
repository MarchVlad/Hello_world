const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

let data = 1;

app.get('/hello-world', (request, response) => {
    // First method
    //------------

    // if(request.cookies['count'])
    // {
    //     data = request.cookies['count'];
    // }
    // if(data === 1)
    // {
    //     response.cookie('count', data).send();
    //     data++;
    // }
    // else
    // {
    // data = request.cookies['count'];
    // data++;
    // response.cookie('count', data);
    // response.send(`Count:${request.cookies['count']}`);
    // console.log('Cookies:', request.cookies);
    // }

    // Second method
    //------------

    if(request.cookies['count'])
    {
        data = request.cookies['count'];
        data++;
        response.cookie('count', data);
        response.send(`Count:${request.cookies['count']}`);
        console.log('Cookies:', request.cookies);
    }
    else
    {
        response.cookie('count', data).send();
    }
})

app.get('/*', function (request, response) {
    response.sendStatus(404); 
});

app.listen(3000);
