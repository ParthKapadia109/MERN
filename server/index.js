const express = require('express')
const { mongoose } = require('mongoose')
const app = express()
const port = 3005
const authRoute = require('./routes/auth')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/rooms')
const usersRoute = require('./routes/users')

app.use(express.json())

// Database
mongoose.connect('mongodb://localhost:27017/myapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
    process.exit()
})

app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
// app.use("/api/rooms",roomsRoute)
// app.use("/api/users",usersRoute)


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))