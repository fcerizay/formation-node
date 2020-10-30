const minimist = require('minimist');
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

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

app.listen(opts.port, () => {
    console.log(`app listening at http://localhost:${chalk.blue.underline.bold(opts.port)}`);
});
