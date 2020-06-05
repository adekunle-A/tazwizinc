const express = require('express');
const app = express();
const connectDB = require('./DB/DbConnectionConfig');
const path = require('path')
const productsRoutes = require('./api/products')
const usersRoutes = require('./api/users')
const customersRoutes = require('./api/customers')
const cors = require('cors')

const port = process.env.PORT || 3080;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')));

//connect to DB
connectDB();

//use api
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/customers', customersRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});
//serves the page if in production
if(process.env.NODE_ENV === 'production'){
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));