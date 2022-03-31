import styled from 'styled-components'

export const ContentNavBar = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.primaryBackgroundBrown};

  .navbar__brand {
    color: #ffffff;
  }
  .navbar__brand:hover {
    color: #ffffff;
    text-decoration: none;
  }
`

export const NavbarBrandLogo = styled.img`
  width: 5vw;
  height: auto;
  margin-right: 0.5rem;
  margin-bottom: 1.5vw;
`
