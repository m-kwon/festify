import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from '../database/index.js';
import festivalsRoutes from './routes/festivals.js';
import artistsRoutes from './routes/artists.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send(`Connected on port ${PORT}`));
app.use('/festivals', festivalsRoutes);
app.use('/artists', artistsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))