import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Card, CardContent } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { editClient } from '../actions/clientActions';
import { DeleteModal } from './DeleteModal';
import { MainModal } from './MainModal';

export const CardClient = ({ item }) => {
  const [editeModal, setEditeModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [inputText, setInputText] = useState({
    phone: item.phone,
    email: item.email,
    name: item.name
  });
  const { fullAddress } = useSelector(state => state.addressReducer);

  const dispatch = useDispatch();

  const openModal = () => setEditeModal(true);
  const closeModal = () => setEditeModal(false);

  const updateClientInfo = () => {
    const newItemInfo = {
      id: item.id,
      name: inputText.name,
      phone: inputText.phone,
      email: inputText.email,
      bindId: item.bindId
    };
    dispatch(editClient(newItemInfo));
    closeModal();
  };

  return (
    <>
      <Card sx={{ width: {
        xs: '100%',
        sm: 'calc(50% - 20px)',
        md: 'calc(33.3% - 30px)'
      },
      marginRight: {
        sm: '20px',
        md: '30px'
      },
      marginBottom: {
        xs: '20px',
        sm: '20px',
        md: '30px'
      } }}
      >
        <CardContent sx={{ padding: '20px 30px 10px' }}>
          <Box sx={{ display: 'flex', marginBottom: '15px' }}>
            <Box sx={{ marginRight: '5px' }}><PermIdentityOutlinedIcon color="primary" /></Box>
            <Box>
              <Box component="p" sx={{ fontWeight: 700, marginBottom: '5px' }}>{item.name}</Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: '18px', color: '#4caf50' }} />
                <Box component="p" sx={{ marginLeft: '5px', color: '#2e7d32' }}>{item.phone}</Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: '18px', color: '#828282' }} />
                <Box component="p" sx={{ marginLeft: '5px' }}>{item.email}</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #b1b3b1' }}>
            <IconButton onClick={() => setModalDelete(true)}><DeleteIcon /></IconButton>
            <IconButton onClick={openModal}><EditIcon /></IconButton>
          </Box>
        </CardContent>
      </Card>
      <MainModal
        open={editeModal}
        closeModal={closeModal}
        title="Редактировать информацию о жильце"
        address={fullAddress}
        formSubmit={updateClientInfo}
        textButton="Сохранить"
        inputText={inputText}
        setInputText={setInputText}
      >
        <EditIcon color="primary" sx={{ fontSize: 50, marginRight: '10px' }} />
      </MainModal>
      <DeleteModal id={item.bindId} modalDelete={modalDelete} setModalDelete={setModalDelete} />
    </>
  );
};
