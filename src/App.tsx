import {
  AppBar,
  Box,
  Button,
  GlobalStyles,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App = () => (
  <>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VBB Web Portal
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
    <Box pt="64px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  </>
);

export default App;
