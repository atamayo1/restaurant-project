import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import restaurantLogo from '../../assets/restaurant-logo.svg'
import {
  ContentContainer,
  ContentHeader,
  ImgLogo,
  ContentBanner,
  ImgFastFood,
} from './RestaurantsContainer.styled'
import bgHeader from '../../assets/bg-home.webp'
import MiniLoader from '../../components/MiniLoader/MiniLoader'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import fastfoodImg from '../../assets/foods.png'
import axios from 'axios'
import { routes } from '../../env/env'
import { NotificationManager } from 'react-notifications'

const cookies = new Cookies()

const RestaurantsContainer = () => {
  const history = useHistory()
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const SignOut = () => {
    cookies.remove('id', { path: '/' })
    cookies.remove('first_name', { path: '/' })
    cookies.remove('last_name', { path: '/' })
    cookies.remove('username', { path: '/' })
    history.push({
      pathname: `/`,
    })
  }

  useEffect(() => {
    axios
    .get(routes.BASE_URL+'/restaurants')
    .then((response) => {
      return response.data
    })
    .then((response) => {
      if (response.length > 0) {
        if(response){
          setData(response)
        }
      }
    })
    .catch((error) => {
      NotificationManager.error(error, '', 5000)
    })
  }, [])

  useEffect(() => {
    if (cookies.get('username')) {
      history.push({
        pathname: `/restaurants`,
      })
    } else {
      history.push({
        pathname: `/`,
      })
    }
  }, [])

  useEffect(() => {console.log('data', data)}, [data])

  return (
    <>
      <ContentHeader>
        <ContentBanner bgHeader={bgHeader}>
          <ContentContainer>
            <ImgLogo src={restaurantLogo} alt="Conf Logo Restaurants" />
            <ImgFastFood src={fastfoodImg} alt="Conf Logo Fast Food" />
          </ContentContainer>
        </ContentBanner>
      </ContentHeader>

      <ContentContainer>
        <RestaurantList data={data} />

        {loading && <MiniLoader />}
      </ContentContainer>
    </>
  )
}

export default RestaurantsContainer
