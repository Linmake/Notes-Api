import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from './pages/Main/MainPage';
import TextEditor from './pages/TextEditor/TextEditor';
import ProjectsMenu from './pages/ProjectsMenu/ProjectsMenu';
import RootLayout from './Layout/RootLayout';
import NotFound from './pages/NotFound/NotFound';
import UsersLayout from './Layout/UsersLayout';
import SignupLayout from './Layout/SignupLayout';
import Account from './components/Account/Accounts/Account';
import SignInUsers from './components/Account/SignIn/SignInUsers';
import PwdAccount from './components/Account/SignUp/PwdAccount'
import EmailSignup from './components/Account/SignUp/EmailSignup'
import NameAccount from './components/Account/SignUp/NameAccount';
import SettingsAccountPage from './pages/SettingsAccount/SettingsAccountPage';
import ProfilePage from './pages/Account/ProfilePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<MainPage/>} />
        
        {/* Rutas principales */}
        <Route path='Projects-menu' element={<ProjectsMenu />} />
        <Route path='Folders' element={<div>Folders Page</div>} />
        
        {/* Ruta de proyecto */}
        <Route path='Project/:projectId' element={<TextEditor />} />
        
        {/* Rutas de cuenta - corregidas */}
        <Route path='Account' element={<UsersLayout />}>
          <Route index element={<Account />} /> {/* Ruta por defecto para /Account */}
          <Route path='profile' element={<ProfilePage />} />
          <Route path='settings' element={<SettingsAccountPage />} />
          
          {/* Rutas de registro anidadas correctamente */}
          <Route path='signup' element={<SignupLayout />}>
            <Route path='email' element={<EmailSignup />}/>
            <Route path='email/pwd' element={<PwdAccount />}/>
            <Route path='email/pwd/name' element={<NameAccount />}/>
          </Route>
          
          <Route path='SignIn' element={<SignInUsers />} />
        </Route>
        
        {/* Ruta 404 debe ir al final */}
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App