import React from "react";
import { Grid2, Box } from "@mui/material";

function Creations({ proyectos }) {
  return (
    <section id="creations" className="creations">
      <h2 className="title-section">Portafolio</h2>
      <Grid2 container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {proyectos.map((proyecto) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={proyecto.id}>
            <h3>{proyecto.name}</h3>
            <br />
            {/* <p>{proyecto.description}</p> */}
            <Box
            >
              <a href={proyecto.url} target="_blank" rel="noreferrer">
                <img src={proyecto.image} alt={proyecto.title} />
              </a>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </section>
  );
}

export default Creations;
