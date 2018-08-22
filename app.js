const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hello, World!'
};

app.use('/graphql', expressGraphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => console.log('Server listening on port 3000'));
