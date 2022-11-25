import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Dialogs } from './components/Dialogs/Dialogs';

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
