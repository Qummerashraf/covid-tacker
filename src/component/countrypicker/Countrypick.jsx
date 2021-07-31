import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { fetchcountries } from "../../api/Api";
import "./countrystyle/Country.css";

function Countrypick(props) {
  const { changecountry, handlecountry } = props;
  const [fetchcountry, setCountry] = useState();

  useEffect(() => {
    const getcountry = async () => {
      setCountry(await fetchcountries());
    };
    getcountry();
  }, [setCountry]);

  const countries = fetchcountry;

  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="countrypick">
                <form>
                  <select
                    onChange={(e) => handlecountry(e.target.value)}
                    value={changecountry}
                  >
                    <option value="global">Global</option>
                    {countries?.length
                      ? countries.map((country, i) => (
                          <option value={country} key={i}>
                            {country}
                          </option>
                        ))
                      : ""}
                  </select>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Countrypick;
