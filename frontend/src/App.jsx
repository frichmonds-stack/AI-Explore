import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import TrackPage from './pages/TrackPage';
import SectionPage from './pages/SectionPage';
import NotFoundPage from './pages/NotFoundPage';
import ToolsPage from './pages/ToolsPage';
import ToolDetailPage from './pages/ToolDetailPage';
import ExplainerPage from './pages/ExplainerPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/:toolId" element={<ToolDetailPage />} />
          <Route path="explainer/:category" element={<ExplainerPage />} />
          <Route path="foundations" element={<TrackPage trackId="foundations" />} />
          <Route path="foundations/:sectionId" element={<SectionPage trackId="foundations" />} />
          <Route path="risks" element={<TrackPage trackId="risks" />} />
          <Route path="risks/:sectionId" element={<SectionPage trackId="risks" />} />
          <Route path="practice" element={<TrackPage trackId="practice" />} />
          <Route path="practice/:sectionId" element={<SectionPage trackId="practice" />} />
          <Route path="pedagogies" element={<TrackPage trackId="pedagogies" />} />
          <Route path="pedagogies/:sectionId" element={<SectionPage trackId="pedagogies" />} />
          <Route path="explore" element={<TrackPage trackId="explore" />} />
          <Route path="explore/:sectionId" element={<SectionPage trackId="explore" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
