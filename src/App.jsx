// /src/App.jsx
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Community from './pages/Community';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import Experts from './pages/Experts';
import Verification from './pages/Verification';
import Remedies from './pages/Remedies';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/community" element={<Community />} />
    <Route path="/remedies" element={<Remedies />} />
    <Route path="/experts" element={<Experts />} />
    <Route path="/verification" element={<ProtectedRoute><Verification /></ProtectedRoute>} />
    <Route path="/create-post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
    <Route path="/post/:id" element={<PostDetails />} />
    <Route path="/profile/:uid" element={<Profile />} />
    <Route path="/saved" element={<ProtectedRoute><Saved /></ProtectedRoute>} />
    <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
    <Route path="*" element={<Home />} />
  </Routes>;
}
