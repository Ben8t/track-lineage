import 'reactflow/dist/style.css'
import './custom_node.css'
import HomeView from './views/HomeView'
import AppView from './views/AppView'
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/app" element={<AppView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
