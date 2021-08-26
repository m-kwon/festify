import { FETCH_FESTS, CURRENT_FEST, ATTEND, FAV_FEST, CREATE } from './actionTypes';
import * as api from '../api';

export const getFestivals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFestivals();
    dispatch({ type: FETCH_FESTS, payload: data });
  } catch (error) {
    console.log('Failed to fetch festivals data: ', error);
  }
}

export const getFestival = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchFestival(id);
    dispatch({ type: CURRENT_FEST, payload: data });
  } catch (error) {
    console.log('Failed to fetch festival data: ', error);
  }
}

export const attendFestival = (id) => async (dispatch) => {
  try {
    const { data } = await api.attendFestival(id);
    dispatch({ type: ATTEND, payload: data });
  } catch (error) {
    console.log('Failed to mark going: ', error);
  }
}

export const favoriteFestival = (id) => async (dispatch) => {
  try {
    const { data } = await api.favoriteFestival(id);
    dispatch({ type: FAV_FEST, payload: data });
  } catch (error) {
    console.log('Failed to bookmark the festival: ', error);
  }
}

export const createFestival = (festivalData) => async (dispatch) => {
  try {
    const { data } = await api.createFestival(festivalData);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('Failed to submit festival data: ', error);
  }
}