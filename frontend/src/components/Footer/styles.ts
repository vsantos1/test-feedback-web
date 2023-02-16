import styled from "styled-components";

export const FooterContainer = styled.footer`

  background-color: ${props => props.theme["footer-color"]};
  border-top: 1px solid ${props => props.theme["gray-200"]};
  position: relative;
  overflow: hidden;


`;

export const HappyballPink = styled.img`
    position: absolute;
    top: -2.3rem;
    left: 1rem;

    @media (max-width: 720px) {
    display: none;
  }
`; 
export const HappyballYellow = styled.img`
    position: absolute;
    top: 3.125rem;
    right: -.2rem;

    @media (max-width: 720px) {
    display: none;
  }
`; 

export const Dumlop = styled.img`
    position: absolute;
    right: 7.938rem;

    @media (max-width: 720px) {
    display: none;
  }
`; 


export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding-bottom: 6.688rem;
  padding-top: 5rem;
  padding-inline: 21.438rem;

  @media (max-width: 720px) {
    padding-inline: 1.5rem;
    justify-content: center;
  }
`;