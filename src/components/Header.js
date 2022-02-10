import {Box} from '@mui/material';

export const Header = () => (
    <Box
        component="header"
        sx={{
            paddingTop: '30px',
            paddingBottom: '30px',
            marginBottom: '40px',
            backgroundColor: '#1565c0',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            display:'flex',
            justifyContent:'center'
        }}
    >
     Dispex.com
    </Box>
);
