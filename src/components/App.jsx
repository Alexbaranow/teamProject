import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';

export default function App({ user }) {
  const { signInHandler, signUpHandler } = useUser(user);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<Registration signUpHandler={signUpHandler} />} />
      </Routes>
    </div>
  );
}
