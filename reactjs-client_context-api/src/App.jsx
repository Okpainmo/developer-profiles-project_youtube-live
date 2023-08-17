import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProfile from './pages/AddProfile';
import UpdateProfile from './pages/UpdateProfile';
import UpdateProfilePageWrapper from './components/UpdateProfilePageWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-profile' element={<AddProfile />} />
        <Route path='/update-profile' element={<UpdateProfilePageWrapper />}>
          <Route path=':profileId' element={<UpdateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
