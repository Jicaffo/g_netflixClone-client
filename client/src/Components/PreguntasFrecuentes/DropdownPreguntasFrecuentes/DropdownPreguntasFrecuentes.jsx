import React from 'react'
import Typography from '@material-ui/core/Typography';
import {useStyles} from './DropdownPreguntasFrecuentes.style'
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ClearIcon from '@material-ui/icons/Clear';
    



const DropdownPreguntasFrecuentes = () => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      'id': "panel1",
      'heading': "¿Qué es Netflix?",
      'content': "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet." ,
      'content2': "Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
    },
    {
      'id': 'panel2',
      'heading': "¿Cuánto cuesta Netflix?",
      'content': "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 379 hasta $ 939 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos."
    },{
      'id': 'panel3',
      'heading': "¿Dónde puedo ver Netflix?",
      'content': "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.",
      'content2': "Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
    },{
      'id': 'panel4',
      'heading': "¿Cómo cancelo?",
      'content': "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
    },{
      'id': 'panel5',
      'heading': "¿Qué puedo ver en Netflix?",
      'content': "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
    },{
      'id': 'panel6',
      'heading': "¿Es bueno Netflix para niños?",
      'content': "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.",
      'content2': "Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
      }
  ];
  
  return (
    
    <Container fixed maxWidth="md" className={classes.root}>
      {data.map(accordion => {
      const {id,heading,content,content2} = accordion
      return (
        <Accordion 
        key={id} 
        className={classes.accordion} 
        expanded={expanded === id} 
        onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ClearIcon className={classes.icon}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.withPadding}
        >
          <Typography variant="h5" className={classes.heading}>
            {heading}
          </Typography>
        </AccordionSummary>
        <Divider className={classes.divider}/>
        <AccordionDetails className={classes.withPadding}>
          <Typography variant="h5">
            {content}
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.withPadding}>
          <Typography variant="h5">
            {content2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })}
      
    </Container>
  );
  
}

export default DropdownPreguntasFrecuentes