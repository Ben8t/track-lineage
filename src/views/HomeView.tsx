import 'reactflow/dist/style.css'
import '../custom_node.css'
import Header from '../Header'


const HomeView = () => {
  return (
    <>
      <Header/>
      <div className="grid grid-cols-12 gap-2">
          <div className="text-8xl mt-10 ml-40 text-bold col-span-8 text-purple">Reinventing <br/> Playlist Creation 🎶</div>
          <div className="text-4xl ml-40 col-span-8 text-black">for music enthusiasts & DJs</div>

      </div>
      <div className='absolute top-80 left-40 w-80 h-80 bg-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute top-40 left-80 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='absolute top-40 left-20 w-80 h-80 bg-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>

      <div className='absolute bottom-80 right-80 w-20 h-20 bg-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute bottom-30 right-40 w-40 h-40 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      <div className='absolute bottom-20 right-40 w-80 h-80 bg-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
    </>
  )
}

export default HomeView
