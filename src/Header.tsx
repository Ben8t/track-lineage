import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const headerStyle = location.pathname === '/app' ? 'bg-black' : 'bg-grey';
  const h1Style = location.pathname === '/app' ? 'text-white' : 'text-purple';

  return (
    <div className={headerStyle + " pb-5"}>
      <h1 className={h1Style + " font-mono text-3xl font-bold ml-2 pt-1"}>Track Lineage</h1>
    </div>
  )
}

export default Header
