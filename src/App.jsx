import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Manifesto from './pages/Manifesto/Manifesto'
import News from './pages/News/News'
import ArticlePage from './pages/News/sections/ArticlePage'
import GalleryPage from './pages/Gallery/Gallery'
import JoinMovement from './pages/JoinMovement/JoinMovement'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<ArticlePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/join" element={<JoinMovement />} />
      </Routes>
    </>
  )
}

export default App