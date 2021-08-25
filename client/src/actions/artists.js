import { FETCH_ARTIST } from './actionTypes';
import * as api from '../api';

export const getArtist = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArtist();
    dispatch({ type: FETCH_ARTIST, payload: data });
  } catch (error) {
    console.log('Failed to fetch artist data: ', error);
  }
}