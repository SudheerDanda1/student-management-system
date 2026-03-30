import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminStudents from './pages/AdminStudents';
import AdminFees from './pages/AdminFees';

// Faculty Pages
import FacultyDashboard from './pages/FacultyDashboard';
import FacultyAttendance from './pages/FacultyAttendance';
import FacultyAcademics from './pages/FacultyAcademics';

// Student Pages
import StudentDashboard from './pages/StudentDashboard';
import StudentAttendance from './pages/StudentAttendance';
import StudentGrades from './pages/StudentGrades';
import StudentFees from './pages/StudentFees';
import StudentProfile from './pages/StudentProfile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route element={<Layout allowedRoles={['Admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<AdminStudents />} />
            <Route path="/admin/fees" element={<AdminFees />} />
          </Route>

          <Route element={<Layout allowedRoles={['Faculty']} />}>
            <Route path="/faculty" element={<FacultyDashboard />} />
            <Route path="/faculty/attendance" element={<FacultyAttendance />} />
            <Route path="/faculty/academics" element={<FacultyAcademics />} />
          </Route>

          <Route element={<Layout allowedRoles={['Student']} />}>
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/attendance" element={<StudentAttendance />} />
            <Route path="/student/grades" element={<StudentGrades />} />
            <Route path="/student/fees" element={<StudentFees />} />
            <Route path="/student/profile" element={<StudentProfile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
