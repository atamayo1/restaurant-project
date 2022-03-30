import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { RestaurantListItem } from '../RestaurantListItem/RestaurantListItem.styled'

const RestaurantList = ({ data }) => {
  const [query, setQuery] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState(data)

  /*   useMemo(() => {
    if (data) {
      const result = data.filter((item) => {
        return `${item.name}`.toLowerCase().includes(query.toLowerCase())
      })
      console.log('setFilteredRestaurants', result)
      setFilteredRestaurants(result)
    }

  }, [data, query])
 */
  return (
    <>
      {filteredRestaurants && filteredRestaurants?.length === 0 && (
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
      )}
      {/*  : (
        <RestaurantList>
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
          {filteredRestaurants && filteredRestaurants.map((item) => {
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
      </RestaurantList>
        )} */}
    </>
  )
}

export default RestaurantList
