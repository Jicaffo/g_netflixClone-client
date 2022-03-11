# Frontend

## Pendientes del equipo inicial (a borrar una vez entregado)

- [ ] Terminar de redondear sweeper (Título, keys, Colores flechas, verificar la forma en que se llama con prop objeto, crear otros, agrandar imagenes al hacer hover?)
- [ ] Repasar componentes en Browse, desde donde llamarlos y pasarles props.
- [ ] Mejorar ```UserLogin``` usando ```formik.touched``` (resolver error) 
- [ ] Mover Contexts puestos en App.js a /contexts? (Agrupar en StylesContexts, BrowserContexts?)

## Descripción general 

- Realizamos un clon de los principales elementos de la UI del sitio [www.netflix.com](www.netflix.com).
- Utilizamos React como base, dividiendo responsabilidades en distintas carpetas (Routes, Layouts, Pages, Contexts, Components, etc).
- Para los estilos utilizamos principalmente los estilos de material UI mediante ```makeStyles```. *(Tener en cuenta que para que sobrescriban los que trae Material UI, deben estar declarados dentro del mismo componente o bien utilizando la sentencia ```!important``` en su declaración)*.

## Instalación / Ejecutar

- Clonar repo (desde la rama ```frontend_develop```)
- ```cd client```
- ```npm i```
- ```npm start```

## Pendientes / posibles mejoras / ideas para continuar

- ```Footer``` (mejorar con display grid, renderizado condicional con variantes en las diferentes rutas).
- ```Header``` (Completar Contenido y su renderizado condicional en las diferentes rutas)
- Lógica en componentes con envío de datos (```UserLogin``` y ```MailLogin```)
- Agregar contexts según necesario (Para usuario, highlightedMedia, etc)
- Refactorizar en custom hooks según necesario
- ```/browse```
    - Renderizado dinámico según info de usuario recibida por context.
    - Continuar con la parte más interactiva. Extra bonus: integrar algo de video (GOD-mode)
- Lo que se les ocurra!

## Tecnologías utilizadas

- [React](https://reactjs.org/) (react, react-router-dom)
- [Material UI (v4)](https://v4.mui.com/) - Componentes de Interfaz Gráfica, estilos, theme, íconos
- [Swipe](https://swiperjs.com/) - Sweeper de imágenes
- [Formik](https://formik.org/docs/overview) - Manejo de estado en formularios
- [Yup](https://github.com/jquense/yup) - Validación de datos
- [Axios](https://axios-http.com/docs/intro) - Conexión a DB (Aún no utilizado)