const defaultState = {
  streets: [],
  street: {},
  houses: [],
  house: {},
  flats: [],
  flat: {},
  fullAddress: '',
  errorOfRequest: false
};

const GET_STREETS = 'GET_STREETS';
const SELECT_STREET = 'SELECT_STREET';
const GET_HOUSES = 'GET_HOUSES';
const SELECT_HOUSE = 'SELECT_HOUSE';
const GET_FLATS = 'GET_FLATS';
const SELECT_FLAT = 'SELECT_FLAT';
const SAVE_FULL_ADDRESS = 'SAVE_FULL_ADDRESS';
const SHOW_ERROR = 'SHOW_ERROR';

export const addressReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_STREETS:
      return { ...state, streets: action.payload };

    case SELECT_STREET:
      return { ...state, street: action.payload };

    case GET_HOUSES:
      return { ...state, houses: action.payload };

    case SELECT_HOUSE:
      return { ...state, house: action.payload };

    case GET_FLATS:
      return { ...state, flats: action.payload };

    case SELECT_FLAT:
      return { ...state, flat: action.payload };

    case SAVE_FULL_ADDRESS:
      return { ...state,
        fullAddress: `${state.street.nameWithPrefix}, д.${state.house.name}, кв.${state.flat.name}` };

    case SHOW_ERROR:
      return { ...state, errorOfRequest: true };

    default:
      return state;
  }
};

export const showAllStreets = payload => ({ type: GET_STREETS, payload });
export const selectStreet = payload => ({ type: SELECT_STREET, payload });
export const showAllHouses = payload => ({ type: GET_HOUSES, payload });
export const selectHouse = payload => ({ type: SELECT_HOUSE, payload });
export const getAllFlats = payload => ({ type: GET_FLATS, payload });
export const selectFlat = payload => ({ type: SELECT_FLAT, payload });
export const saveAddress = () => ({ type: SAVE_FULL_ADDRESS });
export const showRequestError = () => ({ type: SHOW_ERROR });
