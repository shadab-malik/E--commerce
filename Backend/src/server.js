const mongoose = require('mongoose')
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config()
const app = require('./app');


//mongodb connection
const DB = process.env.DB.replace(
    '<password>',
    process.env.DB_PASSWORD
);

mongoose.connect(DB).then(()=>{
    console.log("Database Connection successful")
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
