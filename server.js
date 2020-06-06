const express = require('express');
const app = express();
const connectDB = require('./DB/DbConnectionConfig');
const path = require('path')
const productsRoutes = require('./apiRoutes/api/products')
const usersRoutes = require('./apiRoutes/api/users')
const authUsersRoutes = require('./apiRoutes/api/authUsers')
const customersRoutes = require('./apiRoutes/api/customers')
const cors = require('cors')

const port = process.env.PORT || 3050;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')));

//connect to DB
connectDB();

//use api
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/authUsers', authUsersRoutes);
app.use('/api/customers', customersRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});
//serves the page if in production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));