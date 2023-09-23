import CustomCard from './CustomCard.tsx'

function Search({ nodes, setNodes }: Props) {
    return (
      <div className="search bg-gray-100 rounded-lg">
        <span className='font-mono text-1xl font-bold'>Search</span>
        <CustomCard nodes={nodes} setNodes={setNodes} />
      </div>
    )
  }
  
  export default Search
  