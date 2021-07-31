import React, { useEffect, useState } from 'react';
import Cards from './component/cards/Cards';
import Chart from './component/chart/Chart';
import Countrypick from './component/countrypicker/Countrypick';
import Heading from './component/heading/Heading';
function App() {

  const [confirm, setConfirm] = useState();
  const [recover, setRecover] = useState();
  const [death, setDeath] = useState();
  const [date, setDate] = useState();
  const [changecountry, setchangeCountry] = useState();



  const fetchData = async () => {
    const url = 'https://covid19.mathdro.id/api';
    await fetch(url).then(function (response) {
      console.log(response);
      return response.json();
    }).then(function (jsondata) {
      return (setConfirm(jsondata.confirmed.value),
        setRecover(jsondata.recovered.value),
        setDeath(jsondata.deaths.value),
        setDate(jsondata.lastUpdate)

      )
    })
  }

  const countryData = async () => {
    const changleURL = (`https://covid19.mathdro.id/api/countries/${changecountry}`);
    await fetch(changleURL).then(function (response) {
      return response.json();
    }).then(function (jsondata) {
      return (setConfirm(jsondata.confirmed.value),
        setRecover(jsondata.recovered.value),
        setDeath(jsondata.deaths.value),
        setDate(jsondata.lastUpdate)
      )
    })
  }



  useEffect(() => {

    /*  if (changecountry) {
       return countryData()
     }
     else if (changecountry === 'global' || 'undefined') {
       return fetchData();
     }
     else {
       return fetchData();
     }
  */
    switch (changecountry) {
      case 'global':
        fetchData()
        break;
      case undefined:
        fetchData()
        break;

      default:
        countryData()
        break;
    }
  })


  const simpleDate = new Date().toDateString(date);

  const handlecountry = (country) => {
    setchangeCountry(country);
  };

  return (
    <>
      <Heading />
      <Cards confirmed={confirm} recovered={recover} death={death} time={simpleDate} />
      <Countrypick handlecountry={handlecountry} changecountry={changecountry} />
      <Chart changecountry={changecountry} confirmed={confirm} recovered={recover} death={death} />
    </>
  );
}

export default App;
