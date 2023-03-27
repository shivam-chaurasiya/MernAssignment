import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header';
import Layout from './components/Layout/Layout';
import Login from './components/login/Login';
import Register from "./components/registration/Register";

function App() {
  return( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/layout" element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    )
  
}

export default App;
