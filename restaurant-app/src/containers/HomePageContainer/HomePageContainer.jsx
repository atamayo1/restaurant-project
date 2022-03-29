import React, { useState } from 'react'
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'
import PortalModal from '../../Portals'
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer'
import { ContentLogin } from './HomePageContainer.styled'

const HomePageContainer = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [form, setValues] = useState({
    username: '',
  })

  const handleInput = (event) => {
    if (event.keyCode == 13) {
      event.preventDefault()
    }
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const SignIn = () => {
  }

  return (
    <>
      <HomePageComponent showLogin={showLogin} setShowLogin={setShowLogin} />
      {showLogin && (
        <PortalModal>
          <ContentLogin>
            <LoginPageContainer
              closeLogin={setShowLogin}
              handleInput={handleInput}
              SignIn={SignIn}
            />
          </ContentLogin>
        </PortalModal>
      )}
    </>
  )
}

export default HomePageContainer
