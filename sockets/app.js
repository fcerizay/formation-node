const minimist = require('minimist');
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const Messages = require('./models/message');

const app = express();
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const appRoutes = require('./routes/appRoutes');

var opts = minimist(process.argv.slice(2), {
    string: ['port'],
    default: { port: 80 },
    alias: { p: 'port' }
});

// utilisation d'un router
app.use('/app', appRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Index</h1>');
});

const server = app.listen(opts.port, () => {
    console.log(`app listening at http://localhost:${chalk.blue.underline.bold(opts.port)}`);
});

const io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    socket.on('username',(pseudo) => {
        socket.pseudo = pseudo;
    })
    socket.on('message',async function (message){
        await new Messages().save(socket.pseudo,message);

        const messages = await new Messages().read();
        io.emit('update',messages);
    })
})
