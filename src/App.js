import { Container } from '@mui/material';
import { Search } from './components/Search';
import { Clients } from './components/Clients';
import { Header } from './components/Header';

export const App = () => (
  <>
    <Header />
    <Container>
      <Search />
      <Clients />
    </Container>
  </>
);
