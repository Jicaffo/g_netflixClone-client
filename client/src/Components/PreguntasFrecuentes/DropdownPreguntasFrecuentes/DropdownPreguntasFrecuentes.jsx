import React from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './DropdownPreguntasFrecuentes.style'
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
    



const DropdownPreguntasFrecuentes = ({titulo,parrafo}) => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fixed maxWidth='md' className={classes.container}>
      <Card className={classes.root}>
        <div className={classes.align}>
          <CardHeader
            title={titulo}
          />
          <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <AddIcon />
            </IconButton>
          </div>
          <Divider className={classes.divider}/>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h5'>
            {parrafo}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
  
}

export default DropdownPreguntasFrecuentes