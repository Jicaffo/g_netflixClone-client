import React from 'react';
import { Typography, Container, Box, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "baseline",
    marginTop: "10em"
  
  },
  titleProfiles: {
    color: theme.palette.gray3,
    
  },
  itemsAvatar: {
    display: "flex",
    marginTop:"5em",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  itemsProfiles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: "1rem",
    marginRight: "1rem",
    alignItems: "center",
    "&:hover h6": {
      color: theme.palette.contrastText,
    },
    "&:hover img":{
      boxShadow: `0px 0px 0px 5px ${theme.palette.contrastText}`
    }
    
  },
  itemsGrid: {
    minWidth: "84px",
    minHeight: "84px",
    maxWidth: "150px",
    width: "100%",
    borderRadius: "10px",
  },
  buttonAdministrar:{
    color: theme.palette.gray3,
    border: `solid 2px ${theme.palette.gray3}`, 
    marginTop: "5em",
    transition: "none",
    "&:hover": {
      color: theme.palette.contrastText,
      border: `solid 2px ${theme.palette.contrastText}`
      
    },
    borderRadius: 0,
    fontSize: "15px",
    padding: "10px",
    paddingLeft: "25px",
    paddingRight: "25px"
  }
}));



const UserProfiles = () => {
  const classes = useStyles();

  const profiles = [
    {
      'profileUser':'browse',
      'nameUser': 'José',
      'imgUser': "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71"
    },
    {
      'profileUser':'browse',
      'nameUser': 'Jimena',
      'imgUser': "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcmNAN9bHNZNT9Fm3f-YF1y3Bgj-x3Z9dWYar46_6wAOcR4q5NZS3MUf7SQjkqtVdyWz2DX6SfBHiNourzUjMbGTdDEW.png?r=abe"
    },
    {
      'profileUser':'browse',
      'nameUser': 'Riquelme',
      'imgUser': "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ2KWouF1OCDAtpdNIETPtEAVAywuZcnNb2gJhGfIzhaju9kWWAguLvUkNg_1Y57iTUFVn9_6a9ZmNrdxCHxxzM8yRqX.png?r=c08"
    },
    {
      'profileUser':'browse',
      'nameUser': 'Susana',
      'imgUser': "https://occ-0-22-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUngvSNL3ED6g9NsWhW9_FdDDzKC1gZCmLxi7mim9httnXRVYSxNJHJpbvblu0K_S94YoyPlkA2dja-zfL17UYw6WHkC.png?r=d26"
    },
  ]

  return (
    <Box className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant= "h3"> ¿Quién está viendo ahora?</Typography> 
      </Container>

      <Container maxWidth="md" className={classes.itemsAvatar}>
        {profiles.map(avatarProfiles => {
          const {profileUser,nameUser,imgUser} = avatarProfiles
          return (
            <Box key={nameUser} className={classes.itemsProfiles}>
              <a href= {`/${profileUser}`} >
                <img className={classes.itemsGrid} src={imgUser} alt={imgUser}/>
              </a>
              <Typography variant="h6" className={classes.titleProfiles}>{nameUser}</Typography>
            </Box>
          )
        })}
      </Container>
      <Button className={classes.buttonAdministrar}>Administrar perfiles</Button>
    </Box>
  );
}

export default UserProfiles