import React from 'react'
import { ContentListItem, ImgCompanyLogo } from './RestaurantListItem.styled'

const RestaurantListItem = (props) => {
  return (
    <ContentListItem>
      <ImgCompanyLogo
        src={props?.restaurant?.image}
        alt={'Conf company image logo'}
      />

      <div>
        <strong>{props?.restaurant?.name}</strong>
        <br />
        {props?.restaurant?.website}
      </div>
    </ContentListItem>
  )
}

export default RestaurantListItem
