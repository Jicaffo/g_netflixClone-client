import React from 'react'
import { useHistory } from 'react-router-dom'

// TOFIX: Actualmente altera el comportamiento de todo lo que viene después.
// - Si está activo pero el componente sólo pasa sus children como return, permite ver todas las páginas (no protege).
//   - Si usamos Fragment 404 Funciona bien. // TOFIX: Al crear la página 404 con imagen de fondo rompió. Ver por qué/alternativas.
//   - Si NO usamos el Fragment nunca se llega a mostrar cualquier cosa que esté despues (404 x ej) (no entra dentro del switch asumo).
// - Si verifica token,
//   - Si NO tenemos token (independiente de fragment o no), todas las rutas post wrapper son redirigidas a /login (están dentro o debajo).
//      + Al loguear la petición re realiza OK, el token vuelve, pero no redirige a /profiles (por estar mal ubicada la validación > hook?)
//   - Si ya tenemos token 
//      - Parece funcionar bien, accede a las páginas protegidas y muestra 404 en las que no existen.

// Planteo básico a pasar a hooks dentro del componente
const token = localStorage.getItem("token");
const hasToken = token ? true : false; // Verificamos si tiene un token en el local storage
// TODO: validar autorización contra la DB:
const tokenIsValid = true; // Por ahora Hardcodeado, debe chequear con la DB que el usuario existe.
// Si el token es válido, luego de loguearlo redirige a /perfiles para setear el perfil actual, caso contrario a /login.
// Hacia Login podría enviar por query param un id de error para que renderice condicionalmente un modal con el detalle del error. 

const AuthRequiredWrapper = ({children}) => {
    const history = useHistory()

    return (
        <>
            {/* <div>AuthRequiredWrapper</div> */}
            {/* { hasToken ? children : history.push("/login") } */}
            { children }
        </>
    )
}

export default AuthRequiredWrapper