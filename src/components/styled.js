import styled from 'styled-components';
import Component from './component';

export const Layout = styled(Component)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > .top-nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    + .main {
      top: 56px;
      @media screen and (min-width: 600px) {
        top: 64px;
      }
    }
  }
  > .main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
