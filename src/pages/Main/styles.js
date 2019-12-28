import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  background-color: #303744;
  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    padding: 3rem;
    color: white;
  }
  h1 {
    font-size: 2.5rem;
    color: white;
  }
`;

export const ContainerLogosTechs = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 0.7rem;
  a {
    padding: 0.7rem;
    color: white;
    font-size: 1.5rem;
  }
`
export const LogoTechs = styled.img`
  display: flex;
  height: 6rem;
  margin: 0.5rem 5rem;
`;
