require('dotenv').config();
const express       = require('express');
const app           = express();
const port          = process.env.PORT;  
var http            = require('http').createServer(app);
const cookieParser  = require('cookie-parser');
const errorHandler  = require('errorhandler');
const { Server }    = require("socket.io");
const io            = new Server(http);
const fs            = require("fs");
const path          = require('path');
const baseUrl       = 'src';

app.use(cookieParser());
app.use(errorHandler({ dumpExceptions: true, showStack: true })); 

// Static Files
app.use(express.static(`./${baseUrl}/public`))
// app.use('/css', express.static(`./${baseUrl}/public/css`));
app.use('/js', express.static(`./${baseUrl}/public/js`));
// app.use('/img', express.static(`./${baseUrl}/public/img`));
// app.use('/fonts', express.static(`./${baseUrl}/public/fonts`));

app.set('views', `./${baseUrl}/views`);
app.set('view engine', 'ejs');

var loadPage = require('./controllers/loadPage');
loadPage(app);

http.listen(port, () => console.info(`Listening on port ${port}`));

io.on('connection', async (socket) => {
    socket.on('showpopup', async (data) =>{
        io.sockets.emit('loadpopup', { data : data });
    });
});