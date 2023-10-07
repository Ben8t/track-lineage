import 'reactflow/dist/style.css'
import '../custom_node.css'
import Header from '../Header'
import Flow from '../Flow'
import Search from '../Search'

const AppView = () => {
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

export default AppView
