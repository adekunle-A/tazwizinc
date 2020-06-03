const mongoose = require("mongoose") // calling the mongoose module

const URL = "mongodb+srv://dbAdminUser:ZIEN1QEHCl1lcCYf@cluster0-fz3nf.mongodb.net/tazwiz?retryWrites=true&w=majority" // DB connection URL

// function to async connec to the database
const connectDB = async () => {

   await mongoose.connect(URL, {

      useUnifiedTopology:true, 
      useNewUrlParser: true
   })
   
   console.log('Database connection successful.......')

}
module.exports = connectDB;