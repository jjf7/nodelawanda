import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

// initializing
const app = express()
app.set('PORT', process.env.PORT || process.env.API_PORT)


app.get('/', (req,res) => {
    res.send('Lawanda.shop / Welcome to my Api!!')
})

export default app