const defaultState = {
  clients: [],
  modalDisplay: false,
  errorClients: false
};

const GET_CLIENTS = 'GET_CLIENTS';
const ADD_CLIENT = 'ADD_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
const ERROR_CLIENTS = 'ERROR_CLIENTS';

export const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: action.payload };

    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };

    case EDIT_CLIENT:
      return { ...state,
        clients: state.clients.map(item => item.id === action.payload.id
          ? action.payload
          : item) };

    case DELETE_CLIENT:
      return { ...state,
        clients: state.clients.filter(item => item.bindId !== action.payload) };

    case OPEN_ADD_MODAL:
      return { ...state, modalDisplay: action.payload };

    case ERROR_CLIENTS:
      return { ...state, errorClients: true };

    default:
      return state;
  }
};

export const getAllClients = payload => ({ type: GET_CLIENTS, payload });
export const addNewClient = payload => ({ type: ADD_CLIENT, payload });
export const updateClient = payload => ({ type: EDIT_CLIENT, payload });
export const deleteClientInfo = payload => ({ type: DELETE_CLIENT, payload });
export const showAddModal = payload => ({ type: OPEN_ADD_MODAL, payload });
export const showErrorClients = () => ({ type: ERROR_CLIENTS });
