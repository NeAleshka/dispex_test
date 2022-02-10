import { useDispatch } from 'react-redux';
import { Box, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { deleteClient } from '../actions/clientActions';

export const DeleteModal = ({ id, modalDelete, setModalDelete }) => {
  const dispatch = useDispatch();

  const closeDeleteModal = () => setModalDelete(false);

  const deleteInfo = () => {
    dispatch(deleteClient(id));
    closeDeleteModal();
  };

  return (
    <Modal
      open={modalDelete}
      onClose={closeDeleteModal}
      sx={{ overflow: 'scroll' }}
    >
      <Box
        sx={{ display: 'flex',
          flexDirection: 'column',
          width: {
            xs: '100%',
            sm: '450px'
          },
          padding: {
            xs: '20px',
            sm: '30px 40px'
          },
          backgroundColor: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          outline: 'none' }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <IconButton
            onClick={closeDeleteModal}
            sx={{ position: 'absolute', right: '0px', top: '0px' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <Box component="p" sx={{ fontSize: '18px', marginBottom: '15px' }}>
            Удалить информацию и открепить жильца от данного адреса?
          </Box>
          <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              sx={{ marginRight: '10px' }}
              onClick={closeDeleteModal}
            >
              Отмена
            </Button>
            <Button variant="contained" onClick={deleteInfo}>Удалить</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
