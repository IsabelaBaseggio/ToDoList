const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    const conn = await mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectToDB;
