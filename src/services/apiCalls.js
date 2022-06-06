import axios from 'axios';
import { BACKEND_HOST } from '../Constants'

// ESTRUCTURA DE LA RESPUESTA PARA EL BACK, Debería poder accederse de la siguiente forma:
// res.status // Código de respuesta. Ej: 200
// res.headers["x-access-token"] // Devolvería el JWT en caso de viajar por header (actualmente viaja por body)
// res.data // Objeto que nosotros devolvemos en la respuesta desde el backend
// res.data.msg // Mensaje detallado de la respuesta. Si trae algún error debería concatenarse como string
// res.data.allProfiles // Resultados de peticiones que traen todos los recursos (Ej: allProfiles, allUsers, allMedia)
// res.data.savedUser // Detalle del recurso manipulado (savedUser, deletedUser, updatedProfile, etc)
// res.data.token // Devuelve el JWT // NTH: Es correcto que viaje así o va por header también en la respuesta. "Bearer" en vez de "x-access-token"?
// res.data.error // Objeto del error (en caso de petición fallida)


// NTH: Ver si funciona Axios defaults para evitar tener que pasar baseURL y header en cada petición: https://axios-http.com/docs/config_defaults
const BASE_URL = BACKEND_HOST + "/api";

const setHeaders = () =>{
    return {
        'x-access-token': localStorage.getItem("token")
    }
}

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

// Desde esta función se puede hacer cualquier petición (GET, POST, PATCH, DELETE), pasandole la info correspondiente.
const request = async ({method, url, data}) => {
    console.log("Data recibida: ", method, url, data)
    const res = await axios({
        method: method ?? "GET",
        baseURL: BASE_URL,
        url, // Si es absoluta, sobreescribe baseURL, de lo contrario se suman (BASE_URL + url)
        headers: setHeaders(),
        data 
    }).catch( err => {
        console.error("Error en la petición al servidor..." + err /*+ ". Status:" + res.status*/)
    })
    return res;  
}

export {
    post,
    get,
    patch,
    deleteResource,
    request,
}