import Layout from "./Layouts/Layout"
import "./Styles/index.css"
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*En teoría la propiedad injectFirst del componente StylesProvider debería solucionar el orden de aplicación de los estilos de makeStyles.*/}
      {/*SI Funciona para priorizar los estilos definidos en archivos .css e importados en el componente.*/}
      {/*NO Funciona para priorizar los estilos definidos en archivos .styles.js, exportados como useStyles e importados en el componente.*/}
      <StylesProvider injectFirst>
        <Layout/>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
