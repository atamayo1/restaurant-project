import styled from 'styled-components'

export const ContentHeader = styled.div`
`

export const ContentBanner = styled.div`
  width: 100%;
  padding: 0 0 0 0;
  background: ${({bgHeader}) => bgHeader ? `url("${bgHeader}"), #1b1b25` : 'inherit'};
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ImgLogo = styled.img`
  width: 15vw;
  height: auto;
  margin-bottom: 3em;
`

export const ImgFastFood = styled.img`
  width: 25vw;
  height: auto;
  margin-bottom: 3em;
`
