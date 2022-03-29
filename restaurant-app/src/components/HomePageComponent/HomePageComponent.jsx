import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GeneralStyle } from './HomePageComponent.styled'
import restaurantLogo from '../../assets/restaurant-logo.svg'
import fastfoodImg from '../../assets/foods.png'
import bgHome from '../../assets/bg-home.webp'

const HomePageComponent = ({ showLogin, setShowLogin }) => {
  return (
    <GeneralStyle bgHome={bgHome}>
      <Container>
        <Row>
          <Col className="col-12 col-md-4">
            <img src={restaurantLogo} alt="logo" className="img-fluid mb-2" />

            <h1>Restaurant Management System</h1>
            <button className="btn btn-warning" onClick={() => setShowLogin(!showLogin)}>Start</button>
          </Col>

          <Col className="d-none d-md-block col-md-8">
            <img
              src={fastfoodImg}
              alt="restaurants"
              className="w-75 img-fluid p-4"
            />
          </Col>
        </Row>
      </Container>
    </GeneralStyle>
  )
}

export default HomePageComponent
