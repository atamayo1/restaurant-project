import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/themes'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePageContainer/HomePageContainer'
import RestaurantsContainer from './containers/RestaurantsContainer/RestaurantsContainer'
import RestaurantDetailContainer from './containers/RestaurantDetailContainer/RestaurantDetailContainer'
import NotFound from './containers/NotFound/NotFound'
import Layout from './containers/Layout/Layout'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Layout isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/" component={() => <HomePageContainer setIsAuthenticated={setIsAuthenticated} />}  />
              <Route
                exact
                path="/restaurants" 
                isAuthenticated={isAuthenticated}
                component={RestaurantsContainer}
              />
              <Route
                exact
                path="/restaurants/:restaurantId"
                isAuthenticated={isAuthenticated}
                component={RestaurantDetailContainer}
              />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
