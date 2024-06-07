import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './DB/Connect'; 
import testRouter from './routes/testRoute';
import adminRouter from './routes/adminRoute';
import subCategoryRouter from './routes/publicSubCategoryRoute';
import publicStockRouter from './routes/publicStockRoute';
import searchRoutes from './routes/searchRoutes';
import { backend_version } from './Constant';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to Mosaic Vision Backend! Version ${backend_version}`);
});

app.use('/api/connection', testRouter);
app.use('/api/admin', adminRouter);
app.use('/api/subcategories', subCategoryRouter);
app.use('/api/stocks', publicStockRouter);
app.use('/api/search', searchRoutes);

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
