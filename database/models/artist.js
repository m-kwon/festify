import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
  artist_name: String,
  spotify_id: String,
  followers: {
    type: Number,
    default: 0
  },
  genres: [String],
  spotifyUrl: String,
  imageUrl: String
});

const ArtistData = mongoose.model('ArtistData', artistSchema);

export default ArtistData;