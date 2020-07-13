const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
var dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

//connect to mongodb database
dotenv.config();
var url = process.env.MONGOLAB_URI;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error: ", err.message));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
