# Frontend

## Descripción general 

- Realizamos un clon de los principales elementos de la UI del sitio https://www.netflix.com.
- Utilizamos React como base mediante ```create-react-app```, dividiendo responsabilidades en distintas carpetas (Routes, Layouts, Pages, Contexts, Components, etc).
- Para los estilos utilizamos principalmente los estilos de material UI mediante ```makeStyles```. *(Tener en cuenta que para que sobrescriban los que trae Material UI, deben estar declarados dentro del mismo componente o bien utilizando la sentencia ```!important``` en su declaración)*.

## Instalación / Ejecutar

- Clonar repositorio desde la rama ```frontend_develop```: https://github.com/jpromanonet/guayerd_netflixClone
- Ingresar a la carpeta "client": ```cd client```
- Instalar localmente dependencias necesarias: ```npm i```
- Iniciar el cliente: ```npm start```

## Pendientes / posibles mejoras / ideas para continuar

- ```Header``` - Completar Contenido y su renderizado condicional en las diferentes rutas
- ```Footer```- Mejorar con display grid, renderizado condicional con variantes en las diferentes rutas.
- Lógica en componentes con envío de datos (```UserLogin``` y ```MailLogin```)
- Agregar contexts según necesario (Para usuario, highlightedMedia, etc)
- Refactorizar en custom hooks según necesario
- ```/browse```
    - Renderizado dinámico según info de usuario recibida por context.
    - Mejorar el comportamiento responsive al achicar viewport.
    - Agregar un loader/spinner
    - Continuar con la parte más interactiva. Extra bonus: integrar algo de video (GOD-mode)
- ```UserLogin``` - Puede personalizarse aún más la lógica de validación para que evalúe por separado si es un mail o teléfono (ver utilización de método ```when()``` en ```yup```)
- Manejo de error "404 Not Found".
- Lo que se les ocurra!

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/) - Creación/build del proyecto base y configuración inicial.
- [Material UI (v4)](https://v4.mui.com/) - Componentes de Interfaz Gráfica, estilos, theme, íconos
- [Swipe](https://swiperjs.com/) - Sweeper de imágenes
- [Formik](https://formik.org/docs/overview) - Manejo de estado en formularios
- [Yup](https://github.com/jquense/yup) - Validación de datos
- [Axios](https://axios-http.com/docs/intro) - Conexión a DB (Aún no utilizado)