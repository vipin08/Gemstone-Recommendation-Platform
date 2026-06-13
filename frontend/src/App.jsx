import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import RecommendationForm from "./pages/RecommendationForm.jsx"
import RecommendationResult from "./pages/RecommendationResult.jsx"
import History from "./pages/History.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import About from "./pages/About.jsx"
import NotFound from "./pages/NotFound.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<RecommendationForm />} />
          <Route path="/result" element={<RecommendationResult />} />
          <Route path="/result/:id" element={<RecommendationResult />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
