import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/themes'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePageContainer/HomePageContainer'
import RestaurantsContainer from './containers/RestaurantsContainer/RestaurantsContainer'
import RestaurantDetailContainer from './containers/RestaurantDetailContainer/RestaurantDetailContainer'
import NotFound from './containers/NotFound/NotFound'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/restaurants" component={RestaurantsContainer} />
            <Route
              exact
              path="/restaurants/:restaurantId"
              component={RestaurantDetailContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
