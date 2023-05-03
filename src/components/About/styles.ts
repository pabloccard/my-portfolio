import styled from 'styled-components'

export const AboutSession = styled.section`
  margin: auto;
  background: ${(props) => props.theme['gray-900']};
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6.5rem 2rem;

  h3 {
    color: ${(props) => props.theme.purple};
    text-align: center;
  }
`

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  p {
    color: white;
  }
`
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: ${(props) => props.theme['gray-300']}; */
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;

  background: rgb(141, 116, 229);
  background: radial-gradient(
    circle,
    rgba(141, 116, 229, 1) 0%,
    rgba(128, 128, 128, 1) 100%
  );

  img {
    width: 90px;
    height: 90px;

    border-radius: 50%;
  }
`

export const Bio = styled.div`
  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6;
    text-align: center;
  }
`
