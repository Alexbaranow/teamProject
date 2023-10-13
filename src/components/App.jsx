import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';
import useGroup from '../Hooks/UseGroup';
import Groups from './Pages/Groups';
import Reports from './Pages/Reports';
import TableComponent from './ui/TableComponent';

export default function App({
  names, upgrades, changes, user, groups,
}) {
  const { signInHandler, signUpHandler } = useUser();
  const [comments, setComments] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const { groupSubmitHandler } = useGroup();

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<Registration signUpHandler={signUpHandler} />} />
        <Route
          path="/groups"
          element={
            <Groups user={user} groups={groups} groupSubmitHandler={groupSubmitHandler} />
          }
        />
        <Route path="/reports" element={<Reports />} />
        <Route path="/table" element={<TableComponent names={names} upgrades={upgrades} changes={changes} />} />
      </Routes>
    </div>
  );
}
