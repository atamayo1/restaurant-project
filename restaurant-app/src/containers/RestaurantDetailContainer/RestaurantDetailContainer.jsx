import React, { useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import api from '../../api'
import PageError from '../../components/PageError/PageError'
import PageLoading from '../../components/PageLoading/PageLoading'
import RestaurantDetail from '../../components/RestaurantDetail/RestaurantDetail'
import { GeneralStyle } from './RestaurantDetailContainer.styled'

const RestaurantDetailContainer = (props) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.restaurants
      .read(props.match.params.restaurantId)
      .then((response) => {
        if (response) {
          setData(response)
          setLoading(false)
        }
      })
      .catch((error) => {
        NotificationManager.error(error, '', 5000)
        setError(true)
      })
  }, [])

  return (
    <>
    {error && (<PageError error={error} />)}
    {loading && !data && (<PageLoading />)}
    {!loading && !error && (<RestaurantDetail restaurant={data} />)}
    </>
  )
}

export default RestaurantDetailContainer
