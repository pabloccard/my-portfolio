import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
  }

  h3 {
    color: ${(props) => props.theme.title};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.content};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* Defina o número máximo de linhas desejado */
    overflow: hidden; /* Adiciona reticências (...) se o texto exceder o limite */
  }
`

export const Data = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.primary};
    border-radius: 8px;
    padding: 1rem;
    font-weight: bold;
    font-size: 0.875rem;

    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);

    svg {
      font-size: 1.25rem;
    }
  }
`
