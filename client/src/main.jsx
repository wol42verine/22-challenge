import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';

const container = document.getElementById('root');
const root = createRoot(container); // New method for React 18

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="success" element={<Success />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="products/:id" element={<Detail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
