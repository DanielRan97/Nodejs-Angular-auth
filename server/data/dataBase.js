const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/authNodeJs', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(
        () => console.log('connect to mongo..')
    )