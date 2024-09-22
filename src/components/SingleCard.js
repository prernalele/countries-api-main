import React, {useContext} from 'react'
import ThemeSwitchContext from '../context/ThemeSwitchContext'
import DataContext from '../dataContext'

const SingleCard = ({clickedCountry, isSingleCardClicked, setIsCardClicked}) => {
    const { theme } = useContext(ThemeSwitchContext)
    const { flags
            ,name
            ,nativeName
            ,population
            ,region
            ,subRegion
            ,capital
            ,topLevelDomain
            ,currencies
            ,languages} = clickedCountry
    const backToHome = () => {
        setIsCardClicked(!isSingleCardClicked)
    }
    return (
        <div className={`containerSingle ${theme}`}>
            <button className={theme} onClick={backToHome}>Back</button>
            <div className='details'></div>
            <img className="leftSection" alt={`flag of ${name}`} src={flags.svg} />
            <div className='middleSection'>
                <h1>{name} </h1>
                <div>Native Name: {nativeName}</div>
                <div>Population: {population}</div>
                <div>Region: {region}</div>
                <div>Sub Region: {subRegion}</div>
                <div>Capital: {capital}</div>
            </div>
            <div className='rightSection'>
                <div>Top Level Domain: {topLevelDomain}</div>
                <div>Currencies: {currencies[0].name}</div>
                <div>Languages: {languages[0].name}</div>
            </div>
        </div>
    )
}

export default SingleCard