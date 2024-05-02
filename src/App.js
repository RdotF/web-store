import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers.ts';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';

import Checkout from './pages/Checkout.tsx';
import NotFound from './pages/Notfound.tsx';
import Delivery from './pages/Delivery.tsx';
import Authorization from './pages/Authorization.tsx'
import Registration from './pages/Registration.tsx';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/authorization" element={<Authorization />} />
              <Route path="/registration" element={<Registration />} />
              <Route element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;