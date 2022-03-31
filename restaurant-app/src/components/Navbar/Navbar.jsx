import React from 'react'
import { Link } from 'react-router-dom'
import { ContentNavBar, NavbarBrandLogo } from './Navbar.styled'
import restaurantLogo from '../../assets/restaurant-logo.svg'
import { IconButton, Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({signOut}) => {
  return (
    <div>
      <ContentNavBar>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar__brand d-flex align-items-center" to="/">
            <NavbarBrandLogo src={restaurantLogo} alt="Logo" />
            <span className="font-weight-light">Restaurants</span>
          </Link>
          <Tooltip title="Sign out">
              <IconButton onClick={() => signOut()}>
                <LogoutIcon style={{color: '#fff'}} />
              </IconButton>
          </Tooltip>
        </div>
      </ContentNavBar>
    </div>
  )
}

export default Navbar
