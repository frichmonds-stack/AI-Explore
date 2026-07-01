import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import TrackPage from './pages/TrackPage';
import SectionPage from './pages/SectionPage';
import NotFoundPage from './pages/NotFoundPage';
import ToolsPage from './pages/ToolsPage';
import ToolDetailPage from './pages/ToolDetailPage';
import ExplainerPage from './pages/ExplainerPage';
import GuidesPage from './pages/GuidesPage';
import GuidePage from './pages/GuidePage';
import LearnPage from './pages/LearnPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import CapabilityPage from './pages/CapabilityPage';
import GlossaryPage from './pages/GlossaryPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="guides/:guideId" element={<GuidePage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/:articleId" element={<ArticlePage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/:toolId" element={<ToolDetailPage />} />
          <Route path="explainer/:category" element={<ExplainerPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="learn/capabilities" element={<CapabilitiesPage />} />
          <Route path="learn/capabilities/:capabilityId" element={<CapabilityPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
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
    </BrowserRouter>
  );
}

export default App;
