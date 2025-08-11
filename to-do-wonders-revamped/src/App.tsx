
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/organisms';
import { 
  HomePage, 
  ComponentShowcase, 
  TrackDetailPage, 
  SystemDesignPage,
  SystemDesignRequirementsPage,
  SystemDesignCanvasPage,
  SystemDesignRequirementsPageBackup,
  AIProFlowPage,
  CodeAttemptPageContainer,
  EmailLandingPage,
  GmailComposerPage
} from './pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          <Route path="/system-design/track/:trackId" element={<SystemDesignRequirementsPage />} />
          <Route path="/system-design/canvas/:trackId" element={<SystemDesignCanvasPage />} />
          <Route path="/system-design/requirements-backup/:trackId" element={<SystemDesignRequirementsPageBackup />} />
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
  );
}

export default App;
