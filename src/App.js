import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/account/Login';
import Register from './pages/account/Resgister';

function App() {
  return (
    <Box className='App'>
      <Register/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route path='/account' element={<Outlet/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </Box>
  );
}

export default App;
