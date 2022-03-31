import axios from 'axios'
import md5 from 'md5'
import React, { useEffect, useState } from 'react'
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'
import { routes } from '../../env/env'
import PortalModal from '../../Portals'
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer'
import { ContentLogin } from './HomePageContainer.styled'
import { NotificationManager } from 'react-notifications'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const HomePageContainer = ({ setIsAuthenticated }) => {
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

  useEffect(() => {
    if (cookies.get('username')) {
      history.push({
        pathname: `/restaurants`,
      })
      setIsAuthenticated(true)
    } else {
      history.push({
        pathname: `/`,
      })
      setIsAuthenticated(false)
    }
  }, [])
  

  const SignIn = () => {
    axios
      .get(routes.BASE_URL + '/users', {
        params: { username: form.username, password: md5(form.password) },
      })
      .then((response) => {
        return response.data
      })
      .then((response) => {
        if (response.length > 0) {
          let respuesta = response[0]
          if (respuesta) {
            cookies.set('id', respuesta.id, { path: '/' })
            cookies.set('first_name', respuesta.first_name, { path: '/' })
            cookies.set('last_name', respuesta.last_name, { path: '/' })
            cookies.set('username', respuesta.username, { path: '/' })
            cookies.set('TrustSafety', respuesta.password, { path: '/' })
            NotificationManager.success(
              `Bienvenido ${respuesta.first_name} ${respuesta.last_name}`,
              '',
              5000,
            )
            setShowLogin(!showLogin)
            setIsAuthenticated(true)
            history.push({
              pathname: `/restaurants`,
            })
          }
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
