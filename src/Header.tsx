import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  const headerStyle = location.pathname === '/app' ? 'bg-black' : 'bg-grey'
  const h1Style = location.pathname === '/app' ? 'text-white' : 'text-purple'

  return (
    <div className={headerStyle + ' flex grid-cols-6 gap-20 pb-5 pt-2'}>
      <div className="col-span-2">
        <h1 className={h1Style + ' ml-40 pt-1 font-mono text-3xl font-bold'}>
          Track Lineage
        </h1>
      </div>
      <div>
        <ul className="col-span-4 mt-2 flex gap-10">
          <li className="mr-3">
            <a
              className="inline-block rounded-2xl border border-purple px-3 py-1 text-purple hover:bg-light-purple"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block rounded-2xl border border-purple bg-purple px-3 py-1 text-white"
              href="/app"
            >
              Flow
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block rounded-2xl border border-purple px-3 py-1 text-purple hover:bg-light-purple"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block rounded-2xl border border-purple px-3 py-1 text-purple hover:bg-light-purple"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
