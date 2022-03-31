import React from 'react'
import { ContentDetail } from './RestaurantDetail.styled'
import bgHeader from '../../assets/bg-home.webp'

const RestaurantDetail = (props) => {
  const restaurant = props.restaurant
  return (
    <ContentDetail bgHeader={bgHeader}>
      <div className="RestaurantDetails__brand">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img style={{maxWidth: '100%', maxHeight: '11em',}} src={restaurant?.image} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 RestaurantDetails__brand-attendant-name">
              <h1>{restaurant?.name}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Restaurant">
              <div className="Restaurant__header">
                <img src={restaurant?.image} alt="Logo de la conferencia" />
              </div>

              <div className="Restaurant__section-name">
                <h1>{restaurant?.name}</h1>
              </div>

              <div className="Restaurant__section-info">
                <h3>Address: {restaurant?.address}</h3>
                <div>Neighborhood: {restaurant?.neighborhood}</div>
                <div>Cuisine Type: {restaurant?.cuisine_type}</div>
                <div>Phone: {restaurant?.phone}</div>
                <div>Email: {restaurant?.email}</div>
                <div>Website: {restaurant?.website}</div>
                <div>Reviews: {restaurant?.reviews}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentDetail>
  )
}

export default RestaurantDetail
