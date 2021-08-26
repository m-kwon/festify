import mongoose from 'mongoose';
import ArtistData from '../../database/models/artist.js';

export const getArtist = async (req, res) => {
  const { artist_name } = req.params;

  try {
    const artistData = await ArtistData.findOne({ artist_name }).exec();
    res.status(200).json(festivalData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export const postArtist = async (req, res) => {
  const body = req.body;
  const newArtist = new ArtistData(body);

  try {
    await newArtist.save();
    res.status(201).json(newArtist);
  } catch {
    res.status(409).json({ message: error });
  }
}