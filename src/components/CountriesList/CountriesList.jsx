import React from "react";
import './CountriesList.css'
import CountryName from "./CountryName/CountryName";

const CountriesList = (props) => {
    return (
        <div className="CountryList">
                {
                    props.countriesList.length ? 
                    props.countriesList.map((country, i) => {
                        return <CountryName
                            key = {i}
                            onClick = {() => {props.changeCurrentCountry(country)}}
                        >{country}</CountryName>
                    })
                    :
                    null
                }
        </div>
    )
}


export default CountriesList