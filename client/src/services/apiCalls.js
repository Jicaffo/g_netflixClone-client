import axios from 'axios';

const options = {
    headers: {
      'x-access-token': localStorage.getItem("token")
    }
}

const post = async(url, data) => {

    const res = await axios.post(url, data, options).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

const get = async(url) => {

    const res = await axios.get(url, options).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;

    // TODO: Definir estructura de la respuesta para el back
    // console.log(res)
    // res.status // 201
    // res.headers["x-access-token"] // "token". (si viajara por header)
    // res.data.msg // Mensaje nuestro
    // res.data.allProfiles // Resultados de peticiones que traen todos los recursos (En GET /profiles por ejemplo sería [allProfiles])
    // res.data.savedUser // Propiedad custom nuestra (savedUser, deletedUser, updatedProfile, etc)
    // res.data.token // JWT // NTH: Es correcto que viaje así o va por header también en la respuesta. "Bearer" en vez de "x-access-token"?
    // res.data.error // Objeto de error en caso de petición fallida
}

export {
    post,
    get,
    //patch,
    //delete
}