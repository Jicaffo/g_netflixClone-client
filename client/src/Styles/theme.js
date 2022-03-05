/*Ejemplo de como usar el theme de material UI. TODO: Definir si usar o no (de no usar modificar .styles por sus valores locales).*/
import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
      light: "#f40612"
    },
    secondary: {
      main: "#666"
    },
    background: {
        main: "black",
        input: "white",
        card: "#303030"
    },
    sectionBorder: "#222",
    contrastText: "white",
    errorText: "#ffa00a",
  }
});

export default theme;