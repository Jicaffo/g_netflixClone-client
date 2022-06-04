import axios from 'axios';

// ESTRUCTURA DE LA RESPUESTA PARA EL BACK, Debería poder accederse de la siguiente forma:
// res.status // Código de respuesta. Ej: 200
// res.headers["x-access-token"] // Devolvería el JWT en caso de viajar por header (actualmente viaja por body)
// res.data // Objeto que nosotros devolvemos en la respuesta desde el backend
// res.data.msg // Mensaje detallado de la respuesta. Si trae algún error debería concatenarse como string
// res.data.allProfiles // Resultados de peticiones que traen todos los recursos (Ej: allProfiles, allUsers, allMedia)
// res.data.savedUser // Detalle del recurso manipulado (savedUser, deletedUser, updatedProfile, etc)
// res.data.token // Devuelve el JWT // NTH: Es correcto que viaje así o va por header también en la respuesta. "Bearer" en vez de "x-access-token"?
// res.data.error // Objeto del error (en caso de petición fallida)

const setConfig = () =>{
    return {
        headers: {
          'x-access-token': localStorage.getItem("token")
        }
    }
}

const post = async(url, data) => {
    const config = setConfig()
    const res = await axios.post(url, data, config).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

const get = async(url) => {
    const config = setConfig()
    const res = await axios.get(url, config).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

// Strict mode no permite que la función se llame "delete" a secas
const deleteResource = async(url) => {
    const config = setConfig()
    const res = await axios.delete(url, config).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

const patch = async(url, data) => {
    const config = setConfig()
    const res = await axios.patch(url, data, config).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

export {
    post,
    get,
    patch,
    deleteResource,
}