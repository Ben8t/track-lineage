import 'reactflow/dist/style.css'
import '../custom_node.css'
import Header from '../Header'

const HomeView = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-2">
        <div className="text-bold col-span-8 ml-40 mt-10 text-8xl text-purple">
          Reinventing <br /> Playlist Creation 🎶
        </div>
        <div className="col-span-8 ml-40 text-4xl text-black">
          for music enthusiasts & DJs
        </div>
      </div>
      <div className="float-right mt-20 grid grid-cols-12 gap-2">
        <div className="text-decoration-line: col-span-8 mr-5 mt-40 text-3xl text-black underline">
          Connect with music provider:
        </div>
        <div className="text-bold col-span-8 mr-40 mt-5 flex text-2xl text-black">
          <img
            className="h-10 object-fill"
            src="./src/assets/spotify_logo.png"
            alt=""
          />
        </div>
      </div>

      <div className="absolute left-40 top-80 h-80 w-80 animate-blob rounded-full bg-purple opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-2000 absolute left-80 top-40 h-80 w-80 animate-blob rounded-full bg-fuchsia-500 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute left-20 top-40 h-80 w-80 animate-blob rounded-full bg-purple opacity-30 mix-blend-multiply blur-3xl filter"></div>

      <div className="absolute bottom-80 right-80 h-20 w-20 animate-blob rounded-full bg-purple opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div className="bottom-30 animation-delay-4000 absolute right-40 h-40 w-40 animate-blob rounded-full bg-fuchsia-500 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-6000 absolute bottom-20 right-40 h-80 w-80 animate-blob rounded-full bg-purple opacity-30 mix-blend-multiply blur-3xl filter"></div>
    </>
  )
}

export default HomeView
