import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morganConfig, { morganFormat } from './config/morganConfig.js'
import corsOptions from './config/corsConfig.js'
import helmentConfig from './config/helmetConfig.js'
import helmet from 'helmet'
import { aiChatController } from './routes/aiChatController.js'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CORS configuration
app.use(cors(corsOptions))

// Morgan logger middleware setup
app.use(morganConfig(morganFormat))

// Helmet setup
app.use(helmet(helmentConfig))

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
});
app.post('/api/chat', aiChatController);

// Routing all other non-api call
app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, '../client/dist/index.html')
  );
});


app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Server is running successfully @${process.env.PORT} 👍`)
})