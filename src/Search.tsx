import React from 'react';
import SearchList from './SearchList'
import {useContext, useState} from 'react'
import axios from 'axios'
import {SpotifyContext} from './context/SpotifyContext'
import {FlowContext} from './context/FlowContext'
import {saveAs} from 'file-saver';
import {URI, getTrackFeatures, searchTrack} from './provider/Spotify';

const CLIENT_ID = '0350c90137454dc5a748549664e5ba75'
const REDIRECT_URI = window.location.href
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

function Search() {
    const {token, logout} = useContext(SpotifyContext)
    const {nodes, setNodes, edges, setEdges} = useContext(FlowContext)

    const [searchKey, setSearchKey] = useState('')
    const [tracks, setTracks] = useState([])

    
    

    async function handleSearchTracks(e) {
        e.preventDefault()
        const {data}  = await searchTrack(token, searchKey);
        const trackItems = data.tracks.items;

        const trackFeaturesPromises = trackItems.map(async (item) => {
            const features = await getTrackFeatures(token, item.id);
            return {track: item, features: features};
        });
        const trackFeatures = await Promise.all(trackFeaturesPromises);

        setTracks(trackFeatures)
    }

    function handleExport(e) {
        const data = {
            nodes: nodes,
            edges: edges
        };
        const json = JSON.stringify(data);
        const blob = new Blob([json], {type: 'application/json'});
        saveAs(blob, 'track_lineage_export.json');
    }

    const fileInputRef = React.createRef();

    function handleImportButtonClick() {
        fileInputRef.current.click();
    }


    function handleImport(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);

                if (data.nodes && data.edges) {
                    setNodes(data.nodes);
                    setEdges(data.edges);
                    alert('Import successful!');
                } else {
                    alert('Invalid file format. Please select a valid JSON file.');
                }
            } catch (error) {
                alert('Error parsing JSON. Please check the file format.');
            }
        };

        reader.readAsText(file);
    }

    return (
        <div className="search rounded-lg bg-gray-100 gap-2">
            {
            !token ? (
                <a className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                    href={URI}>
                    Login to Spotify
                </a>
            ) : (
                <button className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                    onClick={logout}>
                    Logout
                </button>
            )
        }
            <div>
                <button className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                    onClick={handleImportButtonClick}>
                    Import
                </button>
                <input type="file" accept=".json"
                    ref={fileInputRef}
                    style={
                        {display: 'none'}
                    }
                    onChange={handleImport}/>
            </div>

            <button className="hover:bg-purple-700 col-span-1 mb-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                onClick={handleExport}>
                Export
            </button>
            <form onSubmit={handleSearchTracks}
                className="form grid grid-cols-6 gap-2">
                <input type="text"
                    onChange={
                        (e) => setSearchKey(e.target.value)
                    }
                    className="col-span-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"/>
                <button className="hover:bg-purple-700 col-span-1 col-span-2 rounded bg-purple px-4 py-2 font-mono font-bold text-white"
                    type={'submit'}>
                    Search
                </button>
            </form>
            <hr className="my-2 h-px border-0 bg-light-purple"/>
            <SearchList nodes={nodes}
                setNodes={setNodes}
                tracks={tracks}/>
        </div>
    )
}

export default Search
