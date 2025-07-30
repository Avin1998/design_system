import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/organisms/MainLayout';
import { DataProvider } from './data/DataProvider.js';
import HomePage from './pages/HomePage';
import SystemDesignPage from './pages/SystemDesignPage';
import SystemDesignRequirementsPage from './pages/SystemDesignRequirementsPage';
import SystemDesignCanvasPage from './pages/SystemDesignCanvasPage';
import TrackDetailPage from './pages/TrackDetailPage';
import CodeAttemptPageContainer from './pages/CodeAttemptPageContainer';
import ComponentShowcase from './pages/ComponentShowcase';
import EmailLandingPage from './pages/EmailLandingPage';
import GmailComposerPage from './pages/GmailComposerPage';
import AIProFlowPage from './pages/AIProFlowPage';

export default function AppWithRouting() {
  return (
    <DataProvider>
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
            <Route path="/email" element={<EmailLandingPage />} />
            <Route path="/email/gmail-composer" element={<GmailComposerPage />} />
            <Route path="/email/ai-pro-flow" element={<AIProFlowPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </Router>
    </DataProvider>
  );
}