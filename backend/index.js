const express = require('express');
const { connectToMongoDB } = require('./connect');
const cookieParser = require('cookie-parser');
const { checkForAuthentication } = require('./middlewares/auth');

//const dotenv = require('dotenv');
const cors = require('cors');
//const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const batchRoutes = require('./routes/batchRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const accountRoutes = require('./routes/accountRoutes');
const uploadsRoutes = require('./routes/uploadsRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const uploadExcel = require('./routes/uploadExcel');
const multer = require('multer');
const path = require('path');
const Account = require('./models/account');

//dotenv.config();
//connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, // This is required to allow cookies and other credentials
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(checkForAuthentication);

app.use('/TrainingApp/users', userRoutes);
app.use('/TrainingApp/batches', batchRoutes);
app.use('/TrainingApp/trainers', trainerRoutes);
app.use('/TrainingApp/accounts', accountRoutes);
app.use('/TrainingApp/attendance', attendanceRoutes);

app.use('/TrainingApp/upload', express.static(path.join(__dirname, 'uploads')));  // Serve uploaded files


app.use('/TrainingApp', uploadsRoutes);

// Use the uploadExcel route
app.use('/TrainingApp/uploadExcel', uploadExcel);



connectToMongoDB('YOUR MONGODB URL HERE')      // replace with your MongoDB URL
    .then(() => console.log("mongoDB connected"));


//const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
