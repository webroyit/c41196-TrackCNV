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

        console.log(data);

    } catch(error){

    }
}