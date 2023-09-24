import SearchList from './SearchList.tsx'

function Search({ nodes, setNodes }: Props) {
  return (
    <div className="search rounded-lg bg-gray-100">
      <span className="text-1xl font-mono font-bold">Search</span>
      <SearchList nodes={nodes} setNodes={setNodes} />
    </div>
  )
}

export default Search
