import axios from "axios";
const url = 'https://covid19.mathdro.id/api';

export const fetchdailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log("Error")
    }
}

export const fetchcountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) =>
            country.name
        )
    } catch (error) {

    }
}




