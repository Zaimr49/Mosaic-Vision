import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './DB/Connect'; 
import testRouter from './routes/testRoute';
import adminRouter from './routes/adminRoute';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use('/api/connection', testRouter);

app.use('/api/admin', adminRouter);

const start = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
