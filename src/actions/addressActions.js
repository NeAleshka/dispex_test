import axios from 'axios';
import { showAllStreets, showAllHouses, getAllFlats, showRequestError } from '../store/reducers/addressReducer';

export const getStreets = () => dispatch => {
  axios.get('https://dispex.org/api/vtest/Request/streets')
    .then(res => dispatch(showAllStreets(res.data)))
    .catch(error => dispatch(showRequestError()));
};

export const getHouses = id => dispatch => {
  axios.get(`https://dispex.org/api/vtest/Request/houses/${id}`)
    .then(res => dispatch(showAllHouses(res.data)))
    .catch(error => dispatch(showRequestError()));
};

export const getFlats = id => dispatch => {
  axios.get(`https://dispex.org/api/vtest/Request/house_flats/${id}`)
    .then(res => dispatch(getAllFlats(res.data)))
    .catch(error => dispatch(showRequestError()));
};
