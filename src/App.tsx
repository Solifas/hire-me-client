import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import HomePage from './pages/Home/HomePage';
import { useAppSelector } from './hooks/appHelper';
import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProfileUpdatePage from './pages/ProfileUpdate/ProfileUpdatePage';
import { ModalProvider } from './context/ModalProvider';


const createRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<div><ProfilePage /></div>} />
      <Route path="/profile/:id" element={<div><ProfileUpdatePage /></div>} />
      <Route path="/register" element={<div>Registration Page</div>} />
    </Routes>
  </BrowserRouter>
)

function App() {
  const loader = useAppSelector(x => x.configuration.showLoading);
  const loaderMessage = useAppSelector(x => x.configuration.loaderMessage);

  return (
    <ModalProvider>
      <div className="App">
        {loader && <Loader loaderMessage={loaderMessage} />}
        <div className='AppContainer'>
          {createRoutes()}
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
