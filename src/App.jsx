import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExplorerPage from './pages/ExplorerPage';
import WatchPage from './pages/WatchPage';
import FavoritesPage from './pages/FavoritesPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/favoris" element={<FavoritesPage />} />
          <Route path="/compte" element={<AccountPage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
