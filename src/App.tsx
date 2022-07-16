import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import RegisterForm from './components/RegisterForm/RegisterForm';

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
        <MainPage />
        {show ? <RegisterForm show={show} handleClose={handleClose} /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
