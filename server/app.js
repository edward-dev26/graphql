const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose.connect(`mongodb+srv://Edward:Drujok2607@cluster0.4xwkm.mongodb.net/graphql?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log('Connection error'));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started');
});