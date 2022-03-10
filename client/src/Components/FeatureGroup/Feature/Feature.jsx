import React from 'react';
import { Box, Container, Typography } from "@material-ui/core";
import "./Feature.css"

const Feature = ({title, description, imgURL, reverse}) => {

    return (
      <Box className="feature">
          <Container className={`feature-container ${ reverse ? "reverse" : "" }`} maxWidth="md">
            <Box>
              <Typography
                variant="h3"
                component="h1"
                className="title"
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                className="subtitle"
              >
                {description}
              </Typography>
            </Box>
            <Box>
              <img src={imgURL} alt="Representation of the feature" />
            </Box>
          </Container>
      </Box>
  )
}

export default Feature;