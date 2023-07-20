import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Login from './Login/Login';
import Register from './Register/Register';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
