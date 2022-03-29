import styled from 'styled-components'

export const GeneralStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(100, 100, 100, 0.5);
  transition: all ease 5s;
  z-index: 15;

  #font-picker-question {
    position: relative !important;
    display: inline-block !important;
    width: 77% !important;
    border-radius: 3px !important;
    box-shadow: none !important;
    margin-right: 9px;
  }

  #font-picker-answer {
    position: relative !important;
    display: inline-block !important;
    width: 77% !important;
    border-radius: 3px !important;
    box-shadow: none !important;
    margin-right: 9px;
  }

  .expanded {
    position: relative !important;
    display: inline-block !important;
    width: 100% !important;
    border-radius: 3px !important;
    box-shadow: none !important;
  }

  .dropdown-button {
    background: none !important;
    border-radius: 3px !important;
    border: 1px solid #bfbfbf !important;
    margin: 0 !important;
  }

  ul {
    background: white !important;
  }

  .expanded ul {
    max-height: 120px !important;
  }
`
