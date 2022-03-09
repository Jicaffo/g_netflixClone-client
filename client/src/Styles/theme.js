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
        input2: "#333",
        card: "#303030"
    },
    sectionBorder: "#222",
    contrastText: "white",
    errorText: "#ffa00a",
    errorText2: "#e87c03",
    linkText:"#0071eb",
    gray1: "#B3B3B3",
    gray2: "#8C8C8C",
    gray3: "#737373",

  }
});

export default theme;