import 'dotenv/config';

import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import api from './api/index.js';

const app = express();
app.use(cors());

app.use(json());
app.use(helmet());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/coucou', (req, res) => {
  res.send('hibou');
});

app.use('/api', api);

export default app;
