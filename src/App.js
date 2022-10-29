import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Login,
  Landing,
  Dashboard
} from "./pages";
function App() {
  return (
    <Routes>
      <Route exact path="" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
