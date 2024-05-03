import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectToDB from './config/db.js';
import fileRouter  from './routes/files.js';

const app = express();
dotenv.config();

connectToDB();

app.use(cors());

// middleware to enable the application to handle JSON data.

app.use(express.json());

//  to parse complex data structures from the request body, such as arrays and nested objects.
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/files', fileRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
