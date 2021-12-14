const express = require('express');
const app = express();

let data = 0;
data = Number(data);

app.get('/hello-world', function(request, response, next){
    data = data + 1;
    console.log(data);
    response.send(`Amount of your visits: ${String(data)}`);
})

app.get('/*', function (request, response) {
    response.sendStatus(404); 
});

app.listen(3000, () => console.log('The server is running port 3000...'));
