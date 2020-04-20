import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#5f065f',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#c01717',
                        backgroundColor: 'rgba(192, 23, 23, 0.5)',
                        fill: true
                    }]
                }}/>) : null
    );

    const barChart = (
        confirmed ? (
            <Bar
              data={{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [{
                      label: 'People',
                      backgroundColor: ["rgba(95, 6, 95, 0.5)", "rgba(82, 182, 24, 0.5)", "rgba(192, 23, 23, 0.5)"],
                      data: [confirmed.value, recovered.value, deaths.value]
                  }],
              }}
              options={{
                  legend:  {display: false },
                  title: { display: true, text: `Current state in ${country}` }
              }}
            />
        ) : null
    )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;