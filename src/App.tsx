import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactPage from './pages/Contact';
const Course = () => <div>Course Component</div>;

function App() {
  return (
    <div>
      <Navbar titles={['Home', 'Project', 'Course', 'Contact']} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;