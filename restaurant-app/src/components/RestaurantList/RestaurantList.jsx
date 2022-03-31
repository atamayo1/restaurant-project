import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import RestaurantListItem from '../RestaurantListItem/RestaurantListItem'
import { ContenttRestaurants } from './RestaurantList.styled'

function useSearchRestaurants(restaurants) {
  const [query, setQuery] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  useMemo(() => {
    const result = restaurants.filter((element) => {
      return `${element.name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredRestaurants(result)
  }, [restaurants, query])

  return { query, setQuery, filteredRestaurants }
}

const RestaurantList = (props) => {
  const restaurants = props.data

  const { query, setQuery, filteredRestaurants } = useSearchRestaurants(restaurants)

  return (
    <>
      {filteredRestaurants.length === 0 ? (
        <div>
          <div className="form-group">
            <label>Filter Restaurants</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>

          <h3>No restaurants were found</h3>
        </div>
      ) : (
        <ContenttRestaurants>
          <div className="form-group">
            <label>Filter Restaurants</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>

          <ul className="list-unstyled">
            {filteredRestaurants.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/restaurants/${item.id}`}
                  >
                    <RestaurantListItem restaurant={item} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </ContenttRestaurants>
      )}
    </>
  )
}

export default RestaurantList
