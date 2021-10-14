import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './db/index.js'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors());
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
    res.json({ msg: "Welcome! Go to /graphql" })
})

// app.use(notFound)
app.use(errorHandler)

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)




const PORT = process.env.PORT || 8080

app.listen(
    PORT, 
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)