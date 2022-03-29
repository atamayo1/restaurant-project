import styled from 'styled-components'

export const LoginContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 55px;
`

export const ContentCredentials = styled.div`
  background: ${({theme}) => theme.primaryBackgroundBrownLight};
  width: 50%;
  height: fit-content;
  display: grid;
  grid-area: login;
  max-height: 90vh;
  min-height: 55vh;
  max-width: 517px;
  border-radius: 5px;

  .w-60percent {
    width: 60%;
    max-width: 270px;
  }
  .form-control{
    font-size: 1.025vw;
    @media (min-width: 2000px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    height: fit-content;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  height: fit-content;
`
