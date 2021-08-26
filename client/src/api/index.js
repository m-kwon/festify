import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchFestivals = () => axios.get(`${url}/festivals`);
export const fetchFestival = (id) => axios.get(`${url}/festivals/details/${id}`)
export const attendFestival = (id) => axios.patch(`${url}/festivals/${id}/attend`);
export const favoriteFestival = (id) => axios.patch(`${url}/festivals/${id}/favorite`);
export const createFestival = (festivalData) => axios.post(`${url}/festivals`, festivalData);

export const fetchArtist = (artist_name) => axios.get(`${url}/artists/${artist_name}`);