import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';
import TableComponent from './ui/TableComponent';

export default function App() {
  const { signInHandler, signUpHandler } = useUser();
  const [comments, setComments] = useState([{id:1}, {id:2}, {id:3}])
  const deleteHandler = () => {
    setComments([]) 
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization signInHandler={signInHandler} />} />
        <Route path="/api/auth/signup" element={<Registration signUpHandler={signUpHandler} />} />
      </Routes>
    </div>
  );
}
