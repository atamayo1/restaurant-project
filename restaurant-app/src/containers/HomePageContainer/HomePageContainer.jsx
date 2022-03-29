import axios from 'axios'
import md5 from 'md5'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'
import { routes } from '../../env/env'
import PortalModal from '../../Portals'
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer'
import { ContentLogin } from './HomePageContainer.styled'
import { NotificationManager } from 'react-notifications'
import { useHistory } from 'react-router-dom'

const cookies = new Cookies()

const HomePageContainer = () => {
  const history = useHistory()
  const [showLogin, setShowLogin] = useState(false)
  const [form, setValues] = useState({
    username: '',
    password: '',
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
    console.log('form', form)
    axios
      .get(routes.BASE_URL, {
        params: { username: form.username, password: md5(form.password) },
      })
      .then((response) => {
        console.log('response 1', response)
        return response.data
      })
      .then((response) => {
        if (response.length > 0) {
          let respuesta = response[0]
          cookies.set('id', respuesta.id, { path: '/' })
          cookies.set('first_name', respuesta.first_name, { path: '/' })
          cookies.set('last_name', respuesta.last_name, { path: '/' })
          cookies.set('username', respuesta.username, { path: '/' })
          NotificationManager.success(
            `Bienvenido ${respuesta.first_name} ${respuesta.last_name}`,
            '',
            5000,
          )
          console.log('response 2', respuesta)
        } else {
          NotificationManager.warning(
            'El usuario o la contraseña no son correctos',
            '',
            5000,
          )
        }
      })
      .catch((error) => {
        NotificationManager.error(error, '', 5000)
      })
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
