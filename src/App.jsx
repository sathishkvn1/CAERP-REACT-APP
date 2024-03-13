import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './common/Login.jsx';
import ForgotPassword from './common/ForgotPassword.jsx';
import QueryManager from './common/QueryManager.jsx';

import Home from './accounts/Home.jsx';


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="*" element={<Login/>} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/querymanager" element={<QueryManager />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
