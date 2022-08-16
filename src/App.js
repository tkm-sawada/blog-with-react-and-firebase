import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navber from './components/Navber';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="h-screen bg-neutral-100">
      <Router>
        <Navber isAuth={isAuth}/>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
