import React, {useContext} from 'react'
import ThemeSwitchContext from '../context/ThemeSwitchContext'
import './singleCard.css'

const SingleCard = ({clickedCountry, isSingleCardClicked, setIsCardClicked}) => {
    const { theme } = useContext(ThemeSwitchContext)
    const { flag
            ,name
            ,nativeName
            ,population
            ,region
            ,subregion
            ,capital
            ,topLevelDomain
            ,currencies
            ,languages} = clickedCountry
    const backToHome = () => {
        setIsCardClicked(!isSingleCardClicked)
    }
    debugger
    return (
        <div className={`containerSingle ${theme}Details`}>
            <button className={`backButton ${theme}Details`} onClick={backToHome}>Back</button>
            <div className='details'>
                <img className="leftSection flag" alt={`flag of ${name}`} src={flag} />
                <div className='middleSection'>
                    <h3>{name} </h3>
                    <div className='otherDetails'>
                        <div>Native Name: {nativeName}</div>
                        <div>Population: {population}</div>
                        <div>Region: {region}</div>
                        <div>Sub Region: {subregion}</div>
                        <div>Capital: {capital || ''}</div>
                    </div>

                </div>
                <div className='rightSection'>
                    <div>Top Level Domain: {topLevelDomain || topLevelDomain.map((domain) => <span>{domain}</span>)}</div>
                    <div>Currencies: {''||currencies?.map((currency) => <span>{currency.name}</span>)}</div>
                    <div>Languages: {languages.map((lang) => <span>{lang.name}</span> )}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard