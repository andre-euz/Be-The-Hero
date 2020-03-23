const express = require('express');

const app = express();

app.listen(3333);

app.get('/', function(req, res) {
    return res.json({
        event : 'Semana OmniStack 11.0',
        name: 'André Euzébio'
    });
})