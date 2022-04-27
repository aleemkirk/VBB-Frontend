import { Box, GlobalStyles } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdvisorIndex from './components/advisor/AdvisorIndex';

const App = () => (
  <>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <Header />
    <Box pt="64px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/advisor/*" element={<AdvisorIndex />} />
      </Routes>
    </Box>
  </>
);

export default App;
