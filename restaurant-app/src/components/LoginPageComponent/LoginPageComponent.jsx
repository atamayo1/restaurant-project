import React from 'react'
import {
  ContentCredentials,
  ContentHeader,
  LoginContent,
} from './LoginPageComponent.styled'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import LoginPageForm from '../LoginPageForm/LoginPageForm'

const LoginPageComponent = ({ closeLogin, handleInput, SignIn }) => {
  return (
    <LoginContent>
      <ContentCredentials>
        <ContentHeader className="mt-3 mx-auto">
          <Tooltip title="close">
            <IconButton>
              <CloseIcon onClick={() => closeLogin(false)} />
            </IconButton>
          </Tooltip>
        </ContentHeader>
        <LoginPageForm
          handleInput={handleInput}
          SignIn={SignIn}
          closeLogin={closeLogin}
        />
      </ContentCredentials>
    </LoginContent>
  )
}

export default LoginPageComponent
