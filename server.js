/******** AUTHOR : InvincibleZeal ********/
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Server up and running.\nhttp://localhost:4000\n\nGraphical\nhttp://localhost:4000/graphql'));
