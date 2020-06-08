//Database  conncetion configuration
const mongoose = require("mongoose") // calling the mongoose module

const URL = process.env.MONGOLAB_URI || process.env.MONGOLAB_BROWN_URI || "mongodb://heroku_nffcpqg1:aog500pflu8nevqlhp4030i23c@ds139448.mlab.com:39448/heroku_nffcpqg1"|| "mongodb+srv://dbAdminUser:ZIEN1QEHCl1lcCYf@cluster0-fz3nf.mongodb.net/tazwiz?retryWrites=true&w=majority" // DB connection URL
//const URL = "mongodb+srv://dbAdminUser:ZIEN1QEHCl1lcCYf@cluster0-fz3nf.mongodb.net/tazwiz?retryWrites=true&w=majority" // DB connection URL
// function to async connec to the database
const connectDB = async () => {
   await mongoose.connect(URL, {
      useCreateIndex: true,
      useUnifiedTopology:true, 
      useNewUrlParser: true,
      useFindAndModify: false
   })
   
   console.log('Database connection successful.......')

}
module.exports = connectDB;