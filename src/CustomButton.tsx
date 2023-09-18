import { useState, FormEvent } from 'react';


function CustomButton({nodes, setNodes}) {
  
    const [state, setState] = useState({
            id: "",
            name: ""
        });

    function onSubmit(event: FormEvent<HTMLFormElement>){
            event.preventDefault();
            console.log(state);
            setNodes(nodes.concat({
                id: state.id,
                data: { 'label': state.name },
                position: { x: 500, y: 100 }
            }));
            console.log(nodes)
    };

  return (
    <div className='grid grid-cols-3 ml-8 mt-8'>
        <form className="form space-y-2 mb-8" onSubmit={onSubmit}>
            <input id="id" placeholder='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event) => setState({ ...state, id: event.target.value })} />
            <input id="name" placeholder='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event) => setState({ ...state, name: event.target.value })} />
            <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" type="submit" >Add Node</button>
        </form>
    </div>
  );
}

export default CustomButton;