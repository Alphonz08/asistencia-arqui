const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/Asistencia'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Asistencia/index.html'));
});

app.listen(process.env.PORT || 8080);
