require('./data/database');
const express = require('express');
const loginRouter = require('./Routers/login');
const eventsRouter = require('./Routers/event');
const cors = require('cors');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


app.use('/auth', loginRouter);
app.use('/events', eventsRouter);


app.listen(3000 , () => {console.log('server running');})