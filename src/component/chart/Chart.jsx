import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchdailyData } from "../../api/Api";
import "./chartstyle/Chart.css";

function Chart({ confirmed, recovered, death, changecountry }) {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchdailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "blue",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Death",
            borderColor: "red",
            backgroundColor: "rgba(255, 0,0,0.4)",
            fill: true,
          },
        ],
      }}
    />
  );

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(4, 0, 255, 0.7)",
              "rgba(9, 255, 0, 0.7)",
              "rgba(255, 0, 0, 0.7)",
            ],
            data: [confirmed, recovered, death],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${changecountry}` },
      }}
    />
  ) : null;

  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {" "}
              <div className="chart">
                {changecountry === "global" ? lineChart : barChart}
              </div>{" "}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Chart;
