import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';
import useGroup from '../Hooks/UseGroup';
import Groups from './Pages/Groups';

export default function App({ groups }) {
  const { signInHandler, signUpHandler } = useUser();
  const { groupSubmitHandler } = useGroup();
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<Registration signUpHandler={signUpHandler} />} />
        <Route
          path="/groups"
          element={<Groups groups={groups} groupSubmitHandler={groupSubmitHandler} />}
        />
      </Routes>
    </div>
  );
}
