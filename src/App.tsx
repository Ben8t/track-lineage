import 'reactflow/dist/style.css'
import './custom_node.css'
import HomeView from './views/HomeView'
import AppView from './views/AppView'
import BlogView from './views/BlogView'
import AboutView from './views/AboutView'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/app" element={<AppView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
