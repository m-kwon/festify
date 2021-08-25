import express from 'express';
const router = express.Router();

import { getFestivals, getFestival, attendFestival, favoriteFestival, createFestival } from '../controllers/festivals.js';

router.get('/', getFestivals);
router.get('/:id/details', getFestival)
router.patch('/:id/attend', attendFestival);
router.patch('/:id/favorite', favoriteFestival);
router.post('/', createFestival);

export default router;