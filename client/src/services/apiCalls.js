import axios from 'axios';

const headers = {
    headers: {
      'x-access-token': localStorage.getItem("token")
    }
}

const post = async(url, data) => {
    const headers = {
        headers: {
          'x-access-token': localStorage.getItem("token")
        }
    }
    const res = await axios.post(url, data, headers).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;
}

const get = async(url) => {
    const headers = {
        headers: {
          'x-access-token': localStorage.getItem("token")
        }
    }
    const res = await axios.get(url, headers).catch( err => {
        console.error("Error en la petición al servidor..." + err)
    })
    return res;

    // TODO: Definir estructura de la respuesta para el back
    // console.log(res)
    // res.status // 201
    // res.headers["x-access-token"] // "token". (si viajara por header)
    // res.data.msg // Mensaje nuestro
    // res.data.results // Resultados de peticiones (En GET /profiles por ejemplo sería [profiles])
    // res.data.allProfiles // Resultados de peticiones que traen todos los recursos (En GET /profiles por ejemplo sería [allProfiles])
    // res.data.filteredProfiles // Resultados de peticiones (En GET /user/:id/profiles por ejemplo sería [filteredProfiles])
    // res.data.token // JWT // NTH: Es correcto que viaje así o va por header también en la respuesta. "Bearer" en vez de "x-access-token"?
    // res.data.savedUser // Propiedad custom nuestra (savedUser, deletedUser, updatedProfile, etc)
}

export {
    post,
    get,
    //patch,
    //delete
}