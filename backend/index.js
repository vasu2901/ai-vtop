const connectToMongoose = require("./db");


const express = require('express')

connectToMongoose();

const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/stud', require('./routes/stud'));
app.use('/api/marks', require('./routes/marks'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
