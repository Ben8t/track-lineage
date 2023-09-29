import React from 'react'
import axios from 'axios'

const CLIENT_ID = '0350c90137454dc5a748549664e5ba75'
const REDIRECT_URI = window.location.href
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

const URI = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`


async function getTrackFeatures(token, track_id) {
    const response = await axios.get(`https://api.spotify.com/v1/audio-features/${track_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

async function searchTrack(token, search_key){
    const data = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: search_key,
            type: 'track'
        }
    });
    return data;
}



export {
    URI,
    getTrackFeatures,
    searchTrack
}