import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/organisms/MainLayout';
import { DataProvider, useCodingPatterns, useSystemDesignData, useCanvasData, useComponentDemos } from './data/DataProvider.js';
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

// Component that uses the data hooks and passes data as props
function AppContent() {
  const { patterns, getExpandedCardData } = useCodingPatterns();
  const { tracks, categories, questions } = useSystemDesignData();
  const { components: canvasComponents, categories: componentCategories } = useCanvasData();
  const demos = useComponentDemos();

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage patterns={patterns} getExpandedCardData={getExpandedCardData} />} />
          <Route path="/system-design" element={<SystemDesignPage systemDesignTracks={tracks} />} />
          <Route 
            path="/system-design/track/:trackId" 
            element={<SystemDesignRequirementsPage tracks={tracks} questions={questions} />} 
          />
          <Route 
            path="/system-design/canvas/:trackId" 
            element={
              <SystemDesignCanvasPage 
                tracks={tracks} 
                canvasComponents={canvasComponents} 
                componentCategories={componentCategories} 
              />
            } 
          />
          <Route path="/showcase" element={<ComponentShowcase demos={demos} />} />
          <Route path="/track/:trackId" element={<TrackDetailPage />} />
          <Route path="/problem/:problemId" element={<CodeAttemptPageContainer />} />
          <Route path="/email" element={<EmailLandingPage />} />
          <Route path="/email/gmail-composer" element={<GmailComposerPage />} />
          <Route path="/email/ai-pro-flow" element={<AIProFlowPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default function AppWithRouting() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}