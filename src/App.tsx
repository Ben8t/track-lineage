import 'reactflow/dist/style.css'
import './custom_node.css'
import Header from './Header.tsx'
import Flow from './Flow.tsx'
import Search from './Search.tsx'

const App = () => {
  return (
    <>
      <Header />

      <div className="m-2 grid grid-cols-4 gap-2">
        <Flow />
        <Search />
      </div>
    </>
  )
}

export default App
