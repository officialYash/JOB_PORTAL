import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js';
import companyRoute from './routes/company.routes.js'; 
import jobRoute from './routes/job.routes.js';
import applicationRoute from './routes/application.routes.js';


dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http://Localhost:5173',
    Credentials:true,
}
app.use(cors(corsOptions))
const PORT = process.env.PORT || 3000;

// api's
app.use('/api/v1/user',userRoute);
app.use('/api/v1/company',companyRoute);
app.use('/api/v1/job',jobRoute);
app.use('/api/v1/application',applicationRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`)
})
