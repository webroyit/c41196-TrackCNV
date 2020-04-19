import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        // destructured
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        const newData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return newData;

    } catch(error){
        
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const newData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return newData;

    } catch(error){
        console.log(error);
    }
}

export const countries = async() => {
    try{
        const res = await axios.get(`${url}/countries`);

        console.log(res);
    } catch(error){
        console.log(error);
    }
}