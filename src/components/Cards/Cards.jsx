import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';
const Cards = (props) => {
    console.log(props)
    // gutterBottom for padding bottom
    return(
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography varaint="h5">Data</Typography>
                <Typography color="textSecondary">Date</Typography>
                <Typography varaint="body2">Number of active cases of COVID-19</Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography varaint="h5">Data</Typography>
                <Typography color="textSecondary">Date</Typography>
                <Typography varaint="body2">Number of recoveries from COVID-19</Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography varaint="h5">Data</Typography>
                <Typography color="textSecondary">Date</Typography>
                <Typography varaint="body2">Number of deaths caused by COVID-19</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
    )
}

export default Cards;