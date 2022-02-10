import axios from 'axios';
import { getAllClients, addNewClient, updateClient, deleteClientInfo, showErrorClients } from '../store/reducers/clientReducers';

export const getClients = id => dispatch => {
  axios.get(`https://dispex.org/api/vtest//HousingStock/clients?addressId=${id}`)
    .then(res => dispatch(getAllClients(res.data)))
    .catch(error => dispatch(showErrorClients()));
};

export const addClient = item => dispatch => {
  axios.post('https://dispex.org/api/vtest//HousingStock/client', item)
    .then(res => {
      axios.put('https://dispex.org/api/vtest//HousingStock/bind_client', {
        AddressId: item.bindId,
        ClientId: res.data.id
      });
      item.id = res.data.id;
      dispatch(addNewClient(item));
    })
    .catch(error => dispatch(showErrorClients()));
};

export const editClient = item => dispatch => {
  axios.post('https://dispex.org/api/vtest//HousingStock/client', item)
    .then(() => dispatch(updateClient(item)))
    .catch(error => dispatch(showErrorClients()));
};

export const deleteClient = id => dispatch => {
  axios.delete(`https://dispex.org/api/vtest//HousingStock/bind_client/${id}`)
    .then(() => dispatch(deleteClientInfo(id)))
    .catch(error => dispatch(showErrorClients()));
};
