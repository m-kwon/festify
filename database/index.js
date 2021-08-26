import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to database:'))
  .catch((error) => console.log('Failed to connect to database: ', error))

const db = mongoose.connection;

export default db;