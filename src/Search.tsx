import CustomButton from './CustomButton.tsx'

function Search({ nodes, setNodes }: Props) {
    return (
      <div className="search">
        <span>Search</span>
        <CustomButton nodes={nodes} setNodes={setNodes} />
      </div>
    )
  }
  
  export default Search
  