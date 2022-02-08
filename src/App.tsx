import { Box, GlobalStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const App = () => (
  <>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <Header />
    <Box pt="64px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  </>
);

export default App;
