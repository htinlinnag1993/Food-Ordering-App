const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const url =  require('url');
const querystring = require('querystring');
// const fs = require('fs');
// const path = require('path');

require('./models/User');
require('./models/Menu');
require('./models/MenuItem');
require('./models/MenuItemImg');
require('./models/Restaurant');

require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(expressip().getIpInfoMiddleware);

require('./routes/authRoutes')(app);
require('./routes/menuRoutes')(app);
require('./routes/menuItemRoutes')(app);
require('./routes/menuItemImgRoutes')(app);


if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js file, main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }); 
}

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function() {});







