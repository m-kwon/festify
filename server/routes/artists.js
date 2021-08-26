import express from 'express';
const router = express.Router();

import { getArtist, postArtist } from '../controllers/artists.js';

router.get('/', getArtist);
router.post('/', postArtist)

export default router;