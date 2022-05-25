/* const getImagenPromesa = () => {
    return new Promise((resolve) => {
        resolve('https://picsum.photos/200/300')
    })
}

getImagenPromesa().then(url => {
    console.log(url);
    const img = document.createElement('img')
    img.src = url
    document.body.appendChild(img)
}).catch(error => {
    console.log(error);
}) */
import axios from "axios"
export const getImagen = async () => {
    const apiKey = 'wEWBsdGtTuEQOwuaa6rU1C7NpdVBmHjq'
    try {
        const peticion = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { url } = peticion.data.data.images.original
        return url;

    } catch (error) {
        return 'No se encontro la imagen';
    }
}

getImagen()
