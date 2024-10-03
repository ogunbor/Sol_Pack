// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainPage from './components/MainPage';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWalletProvider from "./components/AppWalletProvider"; // Adjust path if necessary
 import MainPage from './components/MainPage';
 import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AppWalletProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppWalletProvider>
  );
}

export default App;
