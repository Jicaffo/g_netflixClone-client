import { makeStyles } from "@material-ui/core";

/*Utilizando theme.js en vez de variables locales*/
/*const colors = {
    background: "black",
    contrastText: "white",
    inputBackground: "white",
    primary: "#e50914",
    primaryLight: "#f40612",
};*/

const useStyles = makeStyles( (theme) => ({
    root: {
        paddingTop: "0.85rem"
    },
    text: {
        fontSize: "large",
        margin: "15px"
    },
    input: {
        backgroundColor: theme.palette.background.input,
        width: "450px",
        borderRadius: "2px",
        padding: "0px",
        height: "60px",
        boxSizing: "border-box",
        paddingLeft: "10px",
    },
    button: {
        borderRadius: "2px",
        height: "60px",
        width: "200px",
        marginLeft: "1px", 
        fontSize: "x-large",
        textTransform: "capitalize",
        color: theme.palette.contrastText,
        backgroundColor: theme.palette.primary.main,
        transition:"background-color 0s",  
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    },
    
}));

export {useStyles};