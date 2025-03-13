import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
}

export default App;