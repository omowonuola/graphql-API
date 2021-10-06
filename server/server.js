import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())







const PORT = process.env.PORT || 8080

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)