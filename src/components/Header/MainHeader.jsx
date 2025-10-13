import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import MainLinks from './Components/MainLinks'
import Account from '../Account/Accounts/Account'

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};


const Header = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  marging: 0;
  user-select: none;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  z-index: 10000000;
  background-color: #fff;

  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
  }

  @media (min-width: ${breakpoints.sm}) { 
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
  
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
  }
  
  @media (min-width: ${breakpoints.xl}) {
    
  }

  @media (min-width: ${breakpoints.xxl}) {
    
  }


`
const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
  }

  @media (min-width: ${breakpoints.sm}) { 
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
  }
  
  @media (min-width: ${breakpoints.xl}) {
  }

  @media (min-width: ${breakpoints.xxl}) {
  }

`

const MainHeader = ({mainRoute}) => {
  return (
    <>
      <Header className="navbar navbar-expand-lg">
        <NavContainer>
          <Account marginleft={"0"} mainRoute={mainRoute} gap={"1rem"}/>
          <MainLinks mainRoute={mainRoute}/>
        </NavContainer>
      </Header>
    </>
  )
}
export default MainHeader