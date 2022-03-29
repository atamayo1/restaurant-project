import styled from 'styled-components'

export const LoginContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 55px;
`

export const ContentCredentials = styled.div`
  background: ${({theme}) => theme.primaryBackgroundBrown};
  width: 50%;
  height: fit-content;
  display: grid;
  grid-area: login;
  max-height: 90vh;
  min-height: 55vh;
  max-width: 517px;

  .w-60percent {
    width: 60%;
    max-width: 270px;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  height: fit-content;
`
