import mongoose from 'mongoose';
import FestivalData from '../../database/models/festival.js';

export const getFestivals = async (req, res) => {
  try {
    const festivalData = await FestivalData.find();
    res.status(200).json(festivalData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export const getFestival = async (req, res) => {
  const { id } = req.params;

  try {
    const festivalData = await FestivalData.findByIdAndUpdate(id);
    res.status(200).json(festivalData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export const attendFestival = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  const festival = await FestivalData.findById(id);
  const updatedFestival = await FestivalData.findByIdAndUpdate(id, { going: festival.going + 1 }, { new: true });

  res.json(updatedFestival);
}

export const favoriteFestival = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  const festival = await FestivalData.findById(id);
  const updatedFestival = await FestivalData.findByIdAndUpdate(id, { favorite: !festival.favorite }, { new: true });

  res.json(updatedFestival);
}

export const createFestival = async (req, res) => {
  const body = req.body;
  const newFestival = new FestivalData(body);

  try {
    await newFestival.save();
    res.status(201).json(newFestival);
  } catch {
    res.status(409).json({ message: error });
  }
}