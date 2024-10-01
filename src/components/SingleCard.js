import React, {useContext} from 'react'
import ThemeSwitchContext from '../context/ThemeSwitchContext'
import DataContext from '../dataContext'
import './singleCard.css'

const SingleCard = ({clickedCountry, isSingleCardClicked, setIsCardClicked}) => {
    const { theme } = useContext(ThemeSwitchContext)
    const {allData } = useContext(DataContext)
    const { flag
            ,name
            ,nativeName
            ,population
            ,region
            ,subregion
            ,capital
            ,topLevelDomain
            ,currencies
            ,languages
            , borders} = clickedCountry

    const backToHome = () => {
        setIsCardClicked(!isSingleCardClicked)
    }

    const borderFullNames = 
    borders?.map((border) => allData?.find((eachCountry) => eachCountry.alpha3Code === border ).name) 

    return (
        <div className={`containerSingle ${theme}Details`}>
            <div className={`arrowBack ${theme}Elements`} onClick={backToHome}>
                <ion-icon name="arrow-back-outline" className ="arrow" style={{color: `${theme}` === "light" ? "black" : "white"}}></ion-icon>
                <button className={`backButton ${theme}Elements`}>Back</button>
            </div>

            <div className='details'>
                <img className="leftSection flag" alt={`flag of ${name}`} src={flag} />
                <div className='middleRightAndBordersContainer'>
                <div className="middleAndRightContainer">
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
               {<div className='borders'>
                        {`Border countries: `}
                        {borderFullNames?.length 
                        ? (borderFullNames?.map((code) => 
                        <button className={`${theme}Elements borderCountries`}>{code}</button>))
                        : 'No bordering countries listed'
                        }
                </div>}
                </div>
            </div>
        </div>
    )
}

export default SingleCard