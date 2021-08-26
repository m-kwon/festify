import mongoose from 'mongoose';

const festivalSchema = mongoose.Schema({
  title: String,
  start_date: Date,
  end_date: Date,
  venue: String,
  city: String,
  state: String,
  artists: [String],
  favorite: {
    type: Boolean,
    default: false
  },
  going: {
    type: Number,
    default: 0
  },
  websiteUrl: String,
  posterUrl: String
});

const FestivalData = mongoose.model('FestivalData', festivalSchema);

export default FestivalData;