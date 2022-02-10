import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Alert } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useEffect, useState } from 'react';
import { CardClient } from './CardClient';
import { getClients, addClient } from '../actions/clientActions';
import { showAddModal } from '../store/reducers/clientReducers';
import { MainModal } from './MainModal';

export const Clients = () => {
  const [inputText, setInputText] = useState({ phone: '', email: '', name: '' });

  const dispatch = useDispatch();
  const { flat, fullAddress } = useSelector(state => state.addressReducer);
  const { clients, modalDisplay, errorClients } = useSelector(state => state.clientReducer);

  const openModal = () => {
    if (fullAddress) {
      dispatch(showAddModal(true));
    }
  };

  const closeModal = () => {
    dispatch(showAddModal(false));
    setInputText({ phone: '', email: '', name: '' });
  };

  const addNewClient = () => {
    const newClient = {
      id: 0,
      name: inputText.name,
      phone: inputText.phone,
      email: inputText.email,
      bindId: flat.id
    };

    dispatch(addClient(newClient));
    closeModal();
  };

  useEffect(() => {
    if (flat.id) {
      dispatch(getClients(flat.id));
    }
  }, [flat]);

  return (
    <Box sx={{ paddingBottom: '20px' }}>
      <Box sx={{ display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '10px',
        paddingTop: '10px',
        marginBottom: '30px',
        borderBottom: '1px solid #cccccc' }}
      >
        {
       fullAddress
         ? (
           <Box
             component="p"
             sx={{ fontWeight: '700' }}
           >
             {fullAddress}
           </Box>
         )
         : (
           <Box
             component="p"
             sx={{ color: '#b3b3b3' }}
           >
             Адрес не выбран
           </Box>
         )
        }
        <IconButton
          aria-label="добавить жильца"
          size="medium"
          color="primary"
          sx={{ border: '1px solid #1976d2' }}
          onClick={openModal}
        >
          <PersonAddAltOutlinedIcon />
        </IconButton>
      </Box>
      {errorClients && <Alert severity="error">Что-то пошло не так... Пожалуйста, повторите запрос</Alert>}
      <Box sx={{ display: 'flex',
        flexWrap: 'wrap',
        width: {
          sm: 'calc(100% + 20px)',
          md: 'calc(100% + 30px)'
        },
        marginBottom: {
          sm: '-20px',
          md: '-30px'
        } }}
      >
        {
           clients.length > 0
             ? clients.map(item => <CardClient key={item.id} item={item} />)
             : <Box component="p" sx={{ color: '#b3b3b3', textAlign: 'center' }}>Выберите адрес, чтобы увидеть список жильцов</Box>
         }
      </Box>
      <MainModal
        open={modalDisplay}
        closeModal={closeModal}
        title="Добавить жильца"
        address={fullAddress}
        formSubmit={addNewClient}
        textButton="Добавить"
        inputText={inputText}
        setInputText={setInputText}
      >
        <PersonAddAltOutlinedIcon color="primary" sx={{ fontSize: 50, marginRight: '10px' }} />
      </MainModal>
    </Box>
  );
};
