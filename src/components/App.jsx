import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';
import TableComponent from './ui/TableComponent';

export default function App({
  State, names, section, commit,
}) {
  console.log('State', State);
  console.log('names', names);

  // const { signInHandler, signUpHandler } = useUser(user);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization myPROPOPS={State} />} />
        <Route path="/auth/signup" element={<Registration myProp={42} />} />
        <Route path="/table" element={<TableComponent element={names} section={section} commit={commit} />} />
      </Routes>
    </div>
  );
}
