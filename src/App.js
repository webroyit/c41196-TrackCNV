import React, {Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// no need to write out index.js when using that file name
import { fetchData } from './api';

class App extends Component{
  state = {
    data: {}
  }

  // put async key first before method name because it a life cycle methods
  async componentDidMount(){
    const getData = await fetchData();

    this.setState({ data: getData});
  }
  render(){
    const { data } = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;