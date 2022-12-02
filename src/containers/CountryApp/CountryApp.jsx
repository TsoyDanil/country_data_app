import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Preloader from "../../components/UI/Preloader/Preloader";
import './CountryApp.css'

const CountryApp = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [countriesList, setCountriesList] = useState([])

    const url = 'https://restcountries.com/v2/'

    const getCountryList = async () => {
        try{
            setIsLoading(true)
            const copyArray = []
            const response = await fetch(url  + 'all')
            const result = await response.json()
            result.forEach(country => {
            copyArray.push(country.name)
        })
            setCountriesList(copyArray)
        }
        catch (e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCountryList()
    }, [])

    return (
        <div>   

            {isLoading && <Preloader/>}

            <CountriesList
                countriesList = {countriesList}
            />
        </div>
    )
}

export default CountryApp