import 'reactflow/dist/style.css'
import './custom_node.css'
import HomeView from './views/HomeView'
import TestView from './views/TestView'
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
        <Route path="/test" element={<TestView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
