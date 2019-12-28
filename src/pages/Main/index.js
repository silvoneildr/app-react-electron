import React from 'react';

import {
  Container,
  LogoTechs,
  ContainerLogosTechs,
} from './styles';

import IconReactJS from '../../assets/img/reactjs.png';
import IconElectronJS from '../../assets/img/electronjs.png';

export default function Main() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>
        ReactJS + ElectronJS = This Template <br/>
        Build amazing applications with those technologies! <br/>
        Access the links on this page, read the docs...
      </p>
      <ContainerLogosTechs>
        <LogoTechs src={IconReactJS} />
        <a href="ReactJS">https://reactjs.org</a>
      </ContainerLogosTechs>
      <ContainerLogosTechs>
        <LogoTechs src={IconElectronJS} />
        <a href="EletronJS">https://electronjs.org/</a>
      </ContainerLogosTechs>
    </Container>
  );
}