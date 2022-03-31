import styled from 'styled-components'

export const ContentDetail = styled.div`
  .RestaurantDetails__brand {
    width: 100%;
    padding: 2rem 0;
    background: ${({bgHeader}) => bgHeader ? `url("${bgHeader}"), #1b1b25` : 'inherit'};
    background-repeat: repeat;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .RestaurantDetails__brand-attendant-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Restaurant {
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;
    height: 380px;
  }

  .Restaurant__header {
    padding: 0.5rem 0;
    height: 80px;
    background: ${({theme}) => theme.primaryBackgroundBrown};
    display: flex;
    justify-content: center;
  }

  .Restaurant__section-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .Restaurant__section-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    background: #f4f4f7;
  }

  .Restaurant__avatar {
    border-radius: 50%;
    margin-right: 1rem;
    width: 120px;
    height: 120px;
  }

  .Restaurant__footer {
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #98ca3f;
    font-weight: bold;
    font-style: italic;
  }
`
