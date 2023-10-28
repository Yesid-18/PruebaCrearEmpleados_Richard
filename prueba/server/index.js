const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const app = express();
const PORT = 4000;

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/employee',require('./routes/employeeRoutes'));
app.use('/api/employee/:id',require('./routes/employeeRoutes'));



app.listen(PORT, () => {

    console.log("Servidor Iniciado");
})