import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log('Connection Error: ', error.message);
  }

  const connection = mongoose.connection;

  if (connection.readyState >= 1) {
    console.log('connected to database');
    return;
  }

  connection.on('error', () => console.log('connection failed'));
};

export default connectToDB;
