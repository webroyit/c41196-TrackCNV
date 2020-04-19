import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetechCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetechCountries(await fetchCountries());
        }

        // call the function
        fetchAPI();
    }, [setFetechCountries]);

    console.log(fetchedCountries)

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;