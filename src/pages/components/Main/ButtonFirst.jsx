import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};

const StyledButton = styled.button`
  color: ${props => props.color || '#075C5B'};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.backgroundColor || '#32E6E2'};
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-color: #fff0;
  
  &:hover{     
    /* Agrega tus estilos hover aquí */
  }
  
  &:active{      
    /* Agrega tus estilos active aquí */
  }
  
  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    width: ${props => props.mobileWidth || '400px'};
    height: ${props => props.mobileHeight || '47px'};
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.sm}) { 
    width: ${props => props.mobileWidth || '400px'};
    height: ${props => props.mobileHeight || '47px'};
    font-size: 1rem;
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
    width: ${props => props.mobileWidth || '400px'};
    height: ${props => props.mobileHeight || '47px'};
    font-size: 1rem;
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    color: ${props => props.color || '#075C5B'};
    width: ${props => props.width || '195px'};
    height: ${props => props.height || '57px'};
    font-size: 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 15px !important;
    background-color: ${props => props.backgroundColor || '#32E6E2'};
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    color: ${props => props.color || '#075C5B'};
    width: ${props => props.width || '195px'};
    height: ${props => props.height || '57px'};
    font-size: 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${props => props.backgroundColor || '#32E6E2'};
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;
  }

  @media (min-width: ${breakpoints.xxl}) {
    color: ${props => props.color || '#075C5B'};
    width: ${props => props.width || '195px'};
    height: ${props => props.xxlHeight || '55px'};
    font-size: 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1.5rem;
    background-color: ${props => props.backgroundColor || '#32E6E2'};
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;  
  }
`;

const ButtonFirst = ({ 
  width, 
  height, 
  color, 
  backgroundColor,
  mobileWidth, 
  mobileHeight, 
  smallHeight, 
  tabletHeight, 
  xxlHeight,
  children = "Get Start",
  navigateTo = "Projects-menu"
}) => {
  const navigate = useNavigate();
  
  const handlerNavigate = () => {
    navigate(navigateTo);
  };
  
  return (
    <StyledButton 
      type="button" 
      onClick={handlerNavigate}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
      smallHeight={smallHeight}
      tabletHeight={tabletHeight}
      xxlHeight={xxlHeight}
    >
      {children}
    </StyledButton>
  );
}

export default ButtonFirst;