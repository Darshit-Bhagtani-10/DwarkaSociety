import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CommitteePage from './pages/CommitteePage'
import MembersUnitsPage from './pages/MembersUnitsPage'
import DocumentsPage from './pages/DocumentsPage'
import NoticeBoardPage from './pages/NoticeBoardPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/members-units" element={<MembersUnitsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/notice-board" element={<NoticeBoardPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App