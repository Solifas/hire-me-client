import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import Loader from './components/Loader/Loader';
import LoginPage from './pages/Login/LoginPage';
import Header from './components/Header/Header';
import { useAppSelector } from './hooks/appHelper';
import ProfilePage from './pages/Profile/ProfilePage';
import { ModalProvider } from './context/ModalProvider';
import RegisterPage from './pages/Register/RegisterPage';


const createRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
)

function App() {
  const loader = useAppSelector(x => x.configuration.showLoading);
  const showHeader = useAppSelector(x => true);
  const loaderMessage = useAppSelector(x => x.configuration.loaderMessage);

  return (
    <ModalProvider>
      <div className="App">
        {loader ? <Loader loaderMessage={loaderMessage} />
          :
          <div className='AppContainer'>
            {showHeader && <Header />}
            {createRoutes()}
          </div>
        }
      </div>
    </ModalProvider>
  );
}

export default App;
