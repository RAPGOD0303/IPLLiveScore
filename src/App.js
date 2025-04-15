import logo from './logo.svg';
import './App.css';
import HEader from './component/HEader';
import Hero from './component/Hero';
import HomePage from './Page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return(
    <>
    <BrowserRouter>
      <HEader/>
      <div className='flex flex-col min-h-screen'>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
