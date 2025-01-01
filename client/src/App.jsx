import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Editior from './pages/Editior';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NoPage/>}/>
        {/* <Route path='/editior/:projectID' element={isLoggedIn ? <Editior /> : <Navigate to="/login"/>} />
         */}

        <Route path='/editor/:projectID' element={<Editior />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
