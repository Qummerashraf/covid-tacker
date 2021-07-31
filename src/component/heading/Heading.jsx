import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./head/heading.css";

function Heading() {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="heading">
                <h2>Covid-19 Tracker</h2>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Heading;
