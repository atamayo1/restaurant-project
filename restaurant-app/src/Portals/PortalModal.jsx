import React from 'react'
import { element } from 'prop-types'
import ReactDOM from 'react-dom'
import { GeneralStyle } from './PortalModal.styled'

const PortalModal = ({ children }) => {
  return ReactDOM.createPortal(
    <GeneralStyle>{children}</GeneralStyle>,
    document.getElementById('modal-root'),
  )
}

PortalModal.propTypes = {
  children: element.isRequired,
}

export default PortalModal
