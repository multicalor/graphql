require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const schema = require('../schema/schema.js')

const app = express();
app.use('/graphql', graphqlHTTP({schema, graphiql: true}));
app.use(cors())
const PORT = process.env.PORT || 5000;



app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server started on ${PORT}`)
});