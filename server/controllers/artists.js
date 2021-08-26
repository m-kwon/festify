import ArtistData from '../../database/models/artist.js';
import mongoose from 'mongoose';

export const getArtist = async (req, res) => {
  const { artist_name } = req.params;

  try {
    const artistData = await ArtistData.findOne({ artist_name }).exec();
    res.status(200).json(festivalData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}