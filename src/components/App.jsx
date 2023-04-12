import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getContactsThunk } from '../redux/operations/contactsThunk';

// import Home from 'pages/Home/Home';
// import Layout from './Layout/Layout';
// import Contacts from 'pages/Contacts/Contacts';
// import Login from 'pages/Login/Login';
// import Register from 'pages/Register/Register';
import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));

const Layout = lazy(() => import('./Layout/Layout'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
