import express from 'express';
const router = express.Router();

import { getArtist } from '../controllers/artists.js';

router.get('/', getArtist);

export default router;