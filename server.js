const express = require('express');
const app = express();
const connectDB = require('./DB/DbConnectionConfig');
const productsRoutes = require('./api/products')
const usersRoutes = require('./api/users')
const customersRoutes = require('./api/customers')
const port = process.env.PORT || 3080;

app.use(express.json())
// app.use(express.static(__dirname + '/build'))

connectDB();
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/customers', customersRoutes);
//use api
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
// app.use('/api/product', products)
app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(port, () => console.log(`Listening on port ${port}`));