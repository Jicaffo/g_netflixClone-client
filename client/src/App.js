import Routes from './Routes/Routes';
import "./Styles/index.css"
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
