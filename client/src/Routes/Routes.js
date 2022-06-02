import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BrowseProvider } from '../Contexts/BrowseContext';
import { ProfilesProvider } from "../Contexts/profilesContext";
import Layout from '../Layouts/Layout';
import { Home, Login, Profiles, Browse, EditProfile, AddProfile } from '../Pages';
import theme from '../Styles/theme';

function Routes() {
	return (
		<ThemeProvider theme={theme} >
			{/*En teoría la propiedad injectFirst del componente StylesProvider debería solucionar el orden de aplicación de los estilos personalizados por sobre los que trae Material UI.*/}
			{/*SÍ Funciona para priorizar los estilos definidos en archivos .css e importados en el componente.*/}
			{/*NO Funciona para priorizar los estilos definidos en archivos .styles.js mediante makeStyles, exportados como useStyles e importados en el componente.*/}
			<StylesProvider injectFirst>
				<BrowseProvider>
					<BrowserRouter>
						<Layout>
							<Switch>
								<Route exact component={Home} path="/" />
								<Route exact component={Login} path="/login" />
								<Route exact component={Profiles} path="/profiles" />
								<Route exact component={Profiles} path="/manage-profiles" />
        						<Route exact component={EditProfile} path="/manage-profiles/:id" />
								   {/* <Route
									exact
									component={EditProfile}
									path="/manage-profiles/:userName"
									/> */}
        						<Route exact component={AddProfile} path="/add-profile/" />
								<Route exact component={Browse} path="/browse" />
							</Switch>
						</Layout>
					</BrowserRouter>
				</BrowseProvider>
			</StylesProvider>
		</ThemeProvider>
	)
}

export default Routes;
