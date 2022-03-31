import React from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Navbar from '../../components/Navbar/Navbar'

const cookies = new Cookies()

function Layout(props) {
  const history = useHistory()

  const signOut = () => {
    cookies.remove('id', { path: '/' })
    cookies.remove('first_name', { path: '/' })
    cookies.remove('last_name', { path: '/' })
    cookies.remove('username', { path: '/' })
    cookies.remove('TrustSafety', { path: '/' })
    history.push({
      pathname: `/`,
    })
  }

  return (
    <>
      {props.isAuthenticated && <Navbar signOut={signOut} />}
      {props.children}
    </>
  )
}

export default Layout
