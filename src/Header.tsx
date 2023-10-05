import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const headerStyle = location.pathname === '/app' ? 'bg-black' : 'bg-grey';
  const h1Style = location.pathname === '/app' ? 'text-white' : 'text-purple';

  return (
    <div className={headerStyle + " grid-cols-6 pb-5 flex gap-20 pt-2"}>
      <div className='col-span-2'>
        <h1 className={h1Style + " font-mono text-3xl font-bold ml-40 pt-1"}>Track Lineage</h1>
      </div>
      <div>
        <ul className="flex col-span-4 mt-2 gap-10">
        <li className="mr-3">
            <a className="inline-block border border-purple rounded-2xl text-purple hover:bg-light-purple py-1 px-3" href="/">Home</a>
          </li>
          <li className="mr-3">
            <a className="inline-block border border-purple rounded-2xl py-1 px-3 bg-purple text-white" href="/app">Flow</a>
          </li>
          <li className="mr-3">
            <a className="inline-block border border-purple rounded-2xl text-purple hover:bg-light-purple py-1 px-3" href="/blog">Blog</a>
          </li>
          <li className="mr-3">
            <a className="inline-block border border-purple rounded-2xl text-purple hover:bg-light-purple py-1 px-3" href="/about">About</a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header
