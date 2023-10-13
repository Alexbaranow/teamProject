import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authorization from './ui/Authorization';
import Registration from './ui/Regisration';
import useUser from '../Hooks/UseUser';
import useGroup from '../Hooks/UseGroup';
import Groups from './Pages/Groups';
import Reports from './Pages/Reports';

export default function App({ user, groups }) {
  const { signInHandler, signUpHandler } = useUser();
  const [comments, setComments] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  // const deleteHandler = () => {
  //   setComments([]);
  // };
  const { groupSubmitHandler, formData } = useGroup();
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Authorization signInHandler={signInHandler} />} />
        <Route path="/api/auth/signup" element={<Registration signUpHandler={signUpHandler} />} />
        <Route
          path="/groups"
          element={
            <Groups user={user} groups={groups} groupSubmitHandler={groupSubmitHandler} />
          }
        />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}
