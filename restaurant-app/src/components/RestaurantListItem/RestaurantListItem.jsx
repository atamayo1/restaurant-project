import React from 'react'
import { ImgCompanyLogo } from './RestaurantListItem.styled'

const RestaurantListItem = ({ restaurant }) => {
  return (
    <RestaurantListItem>
      <ImgCompanyLogo src={restaurant.logoUrl} alt={'Conf company image logo'} />

      <div>
        <strong>
          {restaurant.name}
        </strong>
        <br />{restaurant.address}
        <br />{restaurant.phone}
        <br />{restaurant.ratings}
        <br />{restaurant.website}
      </div>
    </RestaurantListItem>
  )
}

export default RestaurantListItem
