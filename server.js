const app = require('express')();
const bodyParser = require('body-parser');
const webRouter = require('./modules/routes/web');
const apiRouter = require('./modules/routes/api');
const mongoose = require('mongoose');
global.config = require('./modules/config');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({
    type: 'application/json'
}));

app.use('/api', apiRouter);
app.use('/', webRouter);


app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`)
});