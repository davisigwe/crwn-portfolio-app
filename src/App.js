import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import Header from './components/header/Header';
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="shop/*" element={<Shop />} />
        <Route exact path="checkout" element={<Checkout />} />
        <Route
          exact
          path="sign-in"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
