import React, {Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// no need to write out index.js when using that file name
import { fetchData } from './api';

class App extends Component{
  state = {
    data: {},
    country: ''
  }

  // put async key first before method name because it a life cycle methods
  async componentDidMount(){
    const getData = await fetchData();

    this.setState({ data: getData});
  }

  handleCountryChange = async (country) => {
    console.log(country);
  }

  render(){
    const { data } = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App;