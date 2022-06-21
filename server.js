const express = require('express');
const connectDB = require('./config/db');

const app = express(); 

// Connect to MongoDB
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Library Management App' }));

// Define routes here
app.use('/api/users', require('./routes/users'))
app.use('/api/books', require('./routes/books'))
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))