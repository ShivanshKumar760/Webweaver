import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
