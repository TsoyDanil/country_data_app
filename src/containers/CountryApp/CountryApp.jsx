import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import Preloader from "../../components/UI/Preloader/Preloader";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import './CountryApp.css'

const CountryApp = () => {

    const [countryInfo, setCountryInfo] = useState(null)

    const [currentCountry, setCurrentCountry] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [countriesList, setCountriesList] = useState([])

    const [borders, setBorders] = useState([])

    const url = 'https://restcountries.com/v2/'

    const changeCurrentCountry = (countryName) => {
        setCurrentCountry(countryName)
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

    const searchCountry = async (countryName) => {
            try{
                setIsLoading(true)
                const response = await fetch( url + `name/${countryName}`)
                const result = await response.json()
                if ('borders' in result[0]){
                    const promiseBorderArray = result[0].borders.map(async (borderCode) => {
                        const response = await fetch(`https://restcountries.com/v2/alpha/${borderCode}`)
                        const result =  await response.json()
                        const countryName = result.name
                        return countryName
                    })
                    const bordersArray = await Promise.all(promiseBorderArray)
                    setBorders(bordersArray)
                } else{
                    setBorders(null)
                }
                setCountryInfo(result[0])
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

    useEffect(() => {
        searchCountry(currentCountry)
    }, [currentCountry])

    return (
        <div className="CountryApp">   

            {isLoading && <Preloader/>}

            <CountriesList
                countriesList = {countriesList}
                changeCurrentCountry = {changeCurrentCountry}
            />

            <CountryInfo
                country = {countryInfo}
                borders = {borders}
            />

        </div>
    )
}

export default CountryApp