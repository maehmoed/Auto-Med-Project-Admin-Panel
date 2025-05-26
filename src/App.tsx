import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StudentsView from './components/students/StudentsView';
import StudentList from './components/students/StudentList';
import StudentPerformance from './components/students/StudentPerformance';
import StudentFeedback from './components/students/StudentFeedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="students" element={<StudentsView />}>
            <Route index element={<StudentList />} />
            <Route path="performance" element={<StudentPerformance />} />
            <Route path="feedback" element={<StudentFeedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
