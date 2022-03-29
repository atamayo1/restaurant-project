import styled from "styled-components";

export const GeneralStyle = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background: ${({bgHome}) => bgHome ? `url("${bgHome}"), #1b1b25` : 'inherit'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  display: flex;
  align-items: center;
`