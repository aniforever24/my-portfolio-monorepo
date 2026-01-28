import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morganConfig, { morganFormat } from './config/morganConfig.js'
import corsOptions from './config/corsConfig.js'
import helmentConfig from './config/helmetConfig.js'
import helmet from 'helmet'
import { aiChatController } from './routes/aiChatController.js'

dotenv.config();

const app = express();

app.use(express.json());

// CORS configuration
app.use(cors(corsOptions))

// Morgan logger middleware setup
app.use(morganConfig(morganFormat))

// Helmet setup
app.use(helmet(helmentConfig))

// Routes
app.get('/testing', (req, res) => {
    res.send('Server is working fine 👍')
})
app.post('/api/chat', aiChatController)


app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server is running successfully @${process.env.PORT} 👍`)
})