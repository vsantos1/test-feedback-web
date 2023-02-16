import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;

  margin: 0 auto;

  position: relative;
`;

export const ImgHeader = styled.img`
  position: absolute;
  top: 22.8px;
  left: 29.9px;
  @media (max-width: 720px) {
    display: none;
  }
`

export const ImgHeaderOpacity = styled.img`
  position: absolute;
  top: 7.8px;
  right: 46rem;

  opacity: 0.2;

  @media (max-width: 720px) {
    display: none;
  }
`;