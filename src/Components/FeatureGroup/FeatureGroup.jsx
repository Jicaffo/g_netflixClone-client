import React from 'react';
import { Box } from "@material-ui/core";
import Feature from'./Feature/Feature';

const FeatureGroup = () => {

    return (
      <Box className="feature-group">
            <Feature
              title="Disfruta en tu TV."
              description="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
              imgURL="./img/feature1.png"
            />
            <Feature
              title="Descarga tus series para verlas offline."
              description="Guarda tu contenido favorito y tendrás siempre algo para ver."
              imgURL="./img/feature2.png"
              reverse
            />
            <Feature
              title="Disfruta donde quieras."
              description="Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra."
              imgURL="./img/feature3.png"
            />
            <Feature
              title="Crea perfiles para niños."
              description="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
              imgURL="./img/feature4.png"
              reverse
            />
      </Box>
  )
}

export default FeatureGroup;