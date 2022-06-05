import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODO: Generar página/componente Register, pegarle a /api/auth/register. Ante respuesta 200 guardar el token en localStorage y redirigir a Profiles. De lo contrario volver a componente Register?.
// TODO: Desde página Login, implementar el link a Register. Desde Login pegarle a /api/auth/login. Ante respuesta 200 guardar el token en localStorage y redirigir a Profiles. De lo contrario volver a componente Login?.
// TODO: Al acceder a la página Profiles pegarle a api/profiles enviando el token mediante el header "x-access-token". Hacer que el mapeo se haga a partir del resultado que devuelva res.data.profiles?. En caso de token ausente o incorrecto redirigir a Login.
