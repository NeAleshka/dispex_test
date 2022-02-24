import { Box, Modal, InputLabel, Input, IconButton, Button } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

export const MainModal = ({ title,
  open,
  closeModal,
  formSubmit,
  address,
  inputText,
  setInputText,
  textButton,
  children }) => (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{ overflow: 'scroll' }}
    >
      <Box
          sx={{ display: 'flex',
          flexDirection: 'column',
          width: {
            xs: '100%',
            sm: '550px'
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {children}
            <Box component="p" sx={{ fontSize: '18px' }}>{title}</Box>
          </Box>
          <IconButton
            sx={{ position: 'absolute', right: '0px', top: '0px' }}
            onClick={closeModal}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <Box component="p" sx={{ marginBottom: '30px' }}>{address}</Box>
          <Box component="form" onSubmit={formSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', marginBottom: '20px' }}>
              <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <Box sx={{ position: 'absolute', bottom: '0px', left: '0px', backgroundColor: '#ebebeb', padding: '5px 5px 7px' }}>+7</Box>
                <InputLabel htmlFor="phone" required>Телефон</InputLabel>
                <Input
                  id="phone"
                  type="phone"
                  required
                  value={inputText.phone}
                  onChange={e => setInputText({ ...inputText, phone: e.target.value })}
                  sx={{ paddingLeft: '32px' }}
                />
              </Box>
              <InputLabel sx={{ display: 'flex', flexDirection: 'column' }}>
                E-mail
                <Input
                  type="text"
                  value={inputText.email}
                  onChange={e => setInputText({ ...inputText, email: e.target.value })}
                  sx={{ width: '220px' }}
                />
              </InputLabel>
            </Box>
            <InputLabel htmlFor="name">ФИО</InputLabel>
            <Input
              id="name"
              type="text"
              value={inputText.name}
              onChange={e => setInputText({ ...inputText, name: e.target.value })}
            />
            <Box sx={{ paddingTop: '40px', alignSelf: 'flex-end' }}>
              <Button
                sx={{ marginRight: '10px' }}
                onClick={closeModal}
              >
                Отмена
              </Button>
              <Button variant="contained" type="submit">{textButton}</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
);
