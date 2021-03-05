const mongoose = require("mongoose");

// Connect to database
const connectDb = async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      await mongoose.connect(process.env.MONGODB_URL_DEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log("Db connected.");
    } else {
      await mongoose.connect(process.env.MONGODB_URL_PROD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log("Db connected.");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
