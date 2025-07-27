import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/organisms/MainLayout';
import HomePage from './pages/HomePage';
import SystemDesignPage from './pages/SystemDesignPage';
import SystemDesignRequirementsPage from './pages/SystemDesignRequirementsPage';
import SystemDesignCanvasPage from './pages/SystemDesignCanvasPage';
import TrackDetailPage from './pages/TrackDetailPage';
import CodeAttemptPageContainer from './pages/CodeAttemptPageContainer';
import ComponentShowcase from './pages/ComponentShowcase';

export default function AppWithRouting() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          <Route path="/system-design/track/:trackId" element={<SystemDesignRequirementsPage />} />
          <Route path="/system-design/canvas/:trackId" element={<SystemDesignCanvasPage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
          <Route path="/track/:trackId" element={<TrackDetailPage />} />
          <Route path="/problem/:problemId" element={<CodeAttemptPageContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}