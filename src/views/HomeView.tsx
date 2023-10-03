import 'reactflow/dist/style.css'
import '../custom_node.css'
import Header from '../Header'


const HomeView = () => {
  return (
    <>
      <Header/>

      <div className="grid grid-cols-12 gap-2">
        <div className="text-8xl mt-10 ml-20 text-bold col-span-8 text-purple">Reinventing <br/> Playlist Creation 🎶</div>
        <div className="text-4xl ml-20 col-span-8 text-black">for music enthusiasts & DJs</div>
        
      </div>
    </>
  )
}

export default HomeView
