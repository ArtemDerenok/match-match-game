import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/mainPage/MainPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ScorePage from './pages/scorePage/ScorePage';
import SettingsPage from './pages/settingsPage/SettingsPage';
import PageNotFound from './pages/404/PageNotFound';
import GamePage from './pages/gamePage/GamePage';


function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <ThemeProvider 
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header handleShow={handleShow} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/score' element={<ScorePage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {show ? <RegisterForm show={show} handleClose={handleClose} /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
