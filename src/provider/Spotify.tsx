import React from 'react'

const CLIENT_ID = '0350c90137454dc5a748549664e5ba75'
const REDIRECT_URI = window.location.href
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

const URI = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

export {
    URI
}