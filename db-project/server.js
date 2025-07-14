const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
