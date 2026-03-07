const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('SUA_URL_DO_MONGODB');
    console.log('MongoDB conectado!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;