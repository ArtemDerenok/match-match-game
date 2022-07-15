import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider 
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
