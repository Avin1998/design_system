
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/organisms';
import { 
  HomePage, 
  ComponentShowcase, 
  TrackDetailPage, 
  SystemDesignPage,
  SystemDesignRequirementsPage,
  AIProFlowPage,
  CodeAttemptPageContainer
} from './pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
          <Route path="/track/:trackId" element={<TrackDetailPage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          <Route path="/system-design/track/:trackId" element={<SystemDesignRequirementsPage />} />
          <Route path="/ai-pro-flow" element={<AIProFlowPage />} />
          <Route path="/code-attempt/:problemId" element={<CodeAttemptPageContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
