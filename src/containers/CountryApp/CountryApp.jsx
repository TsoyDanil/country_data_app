import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Preloader from "../../components/UI/Preloader/Preloader";
import './CountryApp.css'

const CountryApp = () => {

    const [currentCountry, setCurrentCountry] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [countriesList, setCountriesList] = useState([])

    const url = 'https://restcountries.com/v2/'

    const changeCurrentCountry = (countryName) => {
        setCurrentCountry(countryName)
        console.log(countryName)
    }

    const getCountryList = async () => {
        try{
            setIsLoading(true)
            const response = await fetch(url  + 'all')
            const result = await response.json()
            const namesArray = result.map(country => {
                return country.name
            })

            setCountriesList(namesArray)

        }
        catch (error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCountryList()
    }, [])

    useEffect(() => {
        console.log(currentCountry)
    }, [setCurrentCountry])

    return (
        <div>   

            {isLoading && <Preloader/>}

            <CountriesList
                countriesList = {countriesList}
                changeCurrentCountry = {changeCurrentCountry}
            />
        </div>
    )
}

export default CountryApp