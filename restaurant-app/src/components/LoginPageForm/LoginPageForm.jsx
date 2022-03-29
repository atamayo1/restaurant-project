import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { ButtonLogin } from './LoginPageForm.styled'

const LoginPageForm = ({ SignIn, handleInput }) => {
  return (
    <>
      <div id="groupdata" style={{ height: '3em' }}>
        <Form>
          <Form.Group as={Col} md="10" className="mx-auto w-60percent">
            <Form.Control
              type="text"
              name="username"
              id="inputUsername"
              placeholder="Enter your username"
              required="required"
              autoComplete={'off'}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="10" className="mx-auto mt-3 w-60percent">
            <Form.Control
              type="password"
              name="password"
              id="inputPassword"
              placeholder="Enter your password"
              required="required"
              autoComplete={'off'}
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12"></Form.Group>
        </Form>
      </div>
      <ButtonLogin
        className="btn btn-warning"
        onClick={() => {
          SignIn()
        }}
      >
        Click here to sign in
      </ButtonLogin>
    </>
  )
}

export default LoginPageForm
