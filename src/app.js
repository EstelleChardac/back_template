import 'dotenv/config';

import express, { json } from 'express';
import cors from 'cors';
import api from './api/index.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', api);

export default app;
