import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import "./cardstyle/Card.css";
import CountUp from "react-countup";

function Cards(props) {
  const { confirmed, recovered, death, time } = props;
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="card confirm">
                <h2>Infected</h2>
                <h3>
                  <CountUp end={confirmed} duration={2} />
                </h3>
                <p>{time}</p>
                <p>Number of infected people due to COVID-19</p>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="card death">
                <h2>Death</h2>
                <h3>
                  {" "}
                  <CountUp end={death} duration={2} />
                </h3>
                <p>{time}</p>
                <p>Number of people died due to COVID-19</p>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="card recover">
                <h2>Recovered</h2>
                <h3>
                  {" "}
                  <CountUp end={recovered} duration={2} />
                </h3>
                <p>{time}</p>
                <p>Number of recovered people from COVID-19</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Cards;
