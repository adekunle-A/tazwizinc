const express = require('express')
const app = express()
const port = process.env.PORT || 3080;

app.use(express.static(__dirname + '/build'))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/build/index.html')
})
app.listen(port, () => console.log(`Listening on port ${port}`));