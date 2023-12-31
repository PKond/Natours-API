//Mongoose at main file
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection successful');
  });

// 4 Start Server
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening...${process.env.PORT}`));

module.exports = app;
