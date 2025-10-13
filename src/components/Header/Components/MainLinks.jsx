import styled from "styled-components";
import ButtonFirst from "../../../pages/components/Main/ButtonFirst";

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};


const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  gap: 2rem;
`

const LinksContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 2rem;

  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) { 
    display: none;
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

`


const Links = styled.a`
  display: block;
  box-sizing: border-box;
  color: #191918;
  font-style: none;
  font-weight: 400;
  text-decoration: none !important;
  padding: 0.5rem 1rem; /* ← Mejor espaciado */
  white-space: nowrap; /* ← Evita que el texto se parta */
  
  &:hover {
    color: black;
    background-color: rgba(0,0,0,0.1); /* ← Efecto hover opcional */
    border-radius: 4px;
  }
`
const ToggleContent = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  display: none;

  
  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    display: block;
  }

  @media (min-width: ${breakpoints.sm}) { 
    display: block;
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
  
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    display: none;
  }

  @media (min-width: ${breakpoints.xxl}) {
    display: none;
  }
`

export default function LinksIndex({ mainRoute }) {
  return (
    <>
      <LinksContainer className="me-auto mb-2 mb-lg-0">
        <LinksContent>
          <Links
            className="active"
            aria-current="page"
            href={`${mainRoute}/#Create`}
          >
            Model
          </Links>
          <Links
            className="active"
            aria-current="page"
            href={`${mainRoute}/projects-menu`}
          >
            Projects
          </Links>
          <Links
            className="active"
            aria-current="page"
            href={`${mainRoute}/folder`}
          >
            Folders
          </Links>
          <ButtonFirst
            width="130px"
            height="50px"
            color="#059693ff"
            backgroundColor="#1bfcdaff"
          />
        </LinksContent>
      </LinksContainer>
      <ToggleContent>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </ToggleContent>
    </>
  );
}