import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './db'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "Welcome! Go to /graphql" })
})

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphql: true,
    })
)







const PORT = process.env.PORT || 8080

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)