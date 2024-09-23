import React, {useContext} from 'react'
import ThemeSwitchContext from '../context/ThemeSwitchContext'
import './singleCard.css'

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
        <div className={`containerSingle ${theme}Details`}>
            <button className={`backButton ${theme}Details`} onClick={backToHome}>Back</button>
            <div className='details'>
                <img className="leftSection flag" alt={`flag of ${name}`} src={flags.svg} />
                <div className='middleSection'>
                    <h3>{name} </h3>
                    <div className='otherDetails'>
                        <div>Native Name: {nativeName}</div>
                        <div>Population: {population}</div>
                        <div>Region: {region}</div>
                        <div>Sub Region: {subRegion}</div>
                        <div>Capital: {capital}</div>
                    </div>

                </div>
                <div className='rightSection'>
                    <div>Top Level Domain: {topLevelDomain}</div>
                    <div>Currencies: {currencies[0].name}</div>
                    <div>Languages: {languages[0].name}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard