import React, {Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// no need to write out index.js when using that file name
import { fetchData } from './api';

class App extends Component{
  // put async key first before method name because it a life cycle methods
  async componentDidMount(){
    const data = await fetchData();

    console.log(data);
  }
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;