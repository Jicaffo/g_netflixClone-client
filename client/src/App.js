import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import Layout from "./Layouts/Layout"
import "./Styles/index.css"
import theme from "./Styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/*En teoría la propiedad injectFirst del componente StylesProvider debería solucionar el orden de aplicación de los estilos personalizados por sobre los que trae Material UI.*/}
        {/*SÍ Funciona para priorizar los estilos definidos en archivos .css e importados en el componente.*/}
        {/*NO Funciona para priorizar los estilos definidos en archivos .styles.js mediante makeStyles, exportados como useStyles e importados en el componente.*/}
        <StylesProvider injectFirst>
          <Layout/>
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
