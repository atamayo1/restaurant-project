import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import fastfoodImg from '../../assets/foods.png'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import api from '../../api'
import { NotificationManager } from 'react-notifications'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const RestaurantsContainer = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.restaurants
      .list()
      .then((response) => {
        if (response) {
          setData(response)
          setLoading(false)
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
