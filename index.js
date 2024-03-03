const express=require('express')
const mongoose=require('mongoose')
const app=express()

const port = 3000
const cors=require("cors")
const dotenv=require ("dotenv")


dotenv.config()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(process.env.mongoDBurl);
  console.log("db connected");
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })