import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-inline: 9.375rem;

  min-height: calc(100vh - 13rem);

  position: relative;

  overflow: hidden;

  margin: 0 auto;

  @media (max-width: 720px) {
    padding-inline: 1.5rem;
  }
`; 

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ImageContent = styled.div`
  position: absolute;
  top: -5rem;
  right: -19rem;

  @media (max-width: 1440px) {
    transform: scale(.9);
    top: -6rem;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ImgMap = styled.img`

  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);

  @media (min-width: 1440px) {
    
    width: 800px;
    height: 800px;

  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ImgCloud = styled.img`
  position: absolute;
  top: 8.063rem;
  right: 41.438rem;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const BallYellow = styled.img`
    position: absolute;
    top: 32.063rem;
    right: 44.438rem;
    z-index: 2;

    @media (max-width: 720px) {
    display: none;
  }

`;

export const BallPink = styled.img`
    position: absolute;
    top: 34.063rem;
    right: 34.438rem;

    @media (max-width: 720px) {
    display: none;
  }

`;

