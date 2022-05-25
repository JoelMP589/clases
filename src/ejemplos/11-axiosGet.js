import axios from "axios"
const apiKey = 'wEWBsdGtTuEQOwuaa6rU1C7NpdVBmHjq'

const peticion = axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then(({ data }) => {
        const { url } = data.data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
    }).catch(error => {
        console.log(error);
    })