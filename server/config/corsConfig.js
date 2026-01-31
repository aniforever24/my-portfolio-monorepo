import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173"
].filter(Boolean)

const corsOptions = {
    origin: (origin, cb) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return cb(null, true)
        } else {
            return cb(new Error('Not allowed by CORS!'))
        }
    },
    credentials: true
}

export default corsOptions