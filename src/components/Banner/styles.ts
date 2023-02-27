import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1120px;
  /* padding: 8rem 1.5rem; */
  height: calc(100vh - 5.125rem);
`

export const ContentContainer = styled.div`
  h2 {
    color: ${(props) => props.theme.white};

    font-size: 58px;
    /* margin-bottom: 0.5rem; */
    margin-top: -0.7rem;
  }
  span:nth-child(1) {
    color: ${(props) => props.theme.white};
    font-size: 32px;
  }

  span:nth-child(3) {
    color: ${(props) => props.theme.ter};

    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.0125rem;
  }
`
export const TechsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
