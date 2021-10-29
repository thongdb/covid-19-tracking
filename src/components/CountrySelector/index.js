import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

const CountrySelector = ({value, handleOnChange, countries}) => {
    return (
        <FormControl>
            <InputLabel htmlFor="" shrink >Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }} 
            >
                {
                    countries.map((country) => {
                        return <option value={country.ISO2.toLowerCase()}>{country.Country}</option>
                    })
                }
            </NativeSelect>
            <FormHelperText>Lựa chọn Quốc gia</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector;