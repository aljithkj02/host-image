const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to my server!' });
})


const serverStart = () => {
    app.listen(process.env.PORT, async () => {
        await connectDB();
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}
serverStart();