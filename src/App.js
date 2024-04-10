// import React from 'react';
// import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

// import Home from './components/Home';
// import Login from './components/Login';
// import Account from './components/Account';


// import './components/style/home.css'

// const App = () => {
//   return (
//     <Router>
//       <Home/>
//       <Routes>
//         {/* <Route path="/" element={<Home/>}/> */}
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/account" element={<Account/>}/>
//       </Routes>
//     </Router>
//   );
// };

// export default App;










import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.style.css'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
