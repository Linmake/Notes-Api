import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../../styles/components/main/main.css";
import LumiaLogo from "../../../assets/lumia_pina.png"
import CardsContainer from "./CardsContainer";
import EditorVideo from "./EditorVideo";

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};

const ContainerInicio = styled.div`
  width: 100%;
  height: 89%;
  background-color: white; 
  max-width: 100%;
  padding-top: 8% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 0;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.14'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media (min-width: 375px) and (max-width: 430px) {
    height: 77.5%;                      
  }
  
  @media (min-width: 300px) and (max-width: 550px) {
    
  }
`;

const ContainerTitle = styled.div`
  width: 80%;
  margin-top: -5%;
  display: flex;
  font-family: "rubik";
  flex-direction: column;
  color: #191918;
  align-items: center;
  text-align: center;
  cursor: default;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 65px;
  text-align: center;
  font-weight: 1000;
  transition: transform 0.3s ease;
 
  &:hover {
    transform: scale(0.95);
  }

  @media (min-width: 300px) and (max-width: 550px) {
    font-size: 40px;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: #191918;
  margin-top: -8px !important;
`;

const ButtonFirst = styled.button`
  height: 57px;
  font-size: 1.2rem;
  color: #075C5B;
  border-radius: 6px;
  cursor: pointer;
  background-color: #32E6E2;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-color: #fff0;
  &:hover{     
    }
  &:active{      
  }
  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    width: 330px;
    height: 50px;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.sm}) { 
    height: 40px;
    font-size: 1rem;
  }

  /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
  
    height: 40px;
    font-size: 1rem;
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    color: black;
    width: 195px;
    height: 57px;
    font-size: 1.2rem;
    color: #075C5B;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 15px !important;
    
    background-color: #32E6E2;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    color: black;
    width: 195px;
    height: 57px;
    font-size: 1.2rem;
    color: #075C5B;
    border-radius: 6px;
    cursor: pointer;
    background-color: #32E6E2;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;
  }

  @media (min-width: ${breakpoints.xxl}) {
    color: black;
    width: 195px;
    height: 55px;
    font-size: 1.2rem;
    color: #075C5B;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1.5rem;
    background-color: #32E6E2;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border-color: #fff0;  
  }

`;


const ContainerEditor = styled.div`
  display: flex;
  min-width: 1270px;
  min-height: 1300px;
  background-color: white;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid #00000080;
  border-radius: 1rem;
  box-shadow: 0px 20px 50px #00000014,0px 6px 16px #0000000a;
  /* Mobile First (estilo base para móviles) */
  @media (min-width: ${breakpoints.xsm}) {
    width: 350px;
    top: -100%;
    background-color: #ccc;
  }
  
  @media (min-width: ${breakpoints.sm}) { 
    width: 350px;
    }
    
    /* Tablet (≥ 768px) */
  @media (min-width: ${breakpoints.md}) {
    width: 300px;
  }

  /* Desktop (≥ 905px) */
  @media (min-width: ${breakpoints.lg}) {
    width: 850px !important;
    min-height: 470px;
    top: -4%;
    left: 9% !important;
    display: flex;
    height: 470px;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 1px solid #0000001a;
    z-index: 10000000000000000;
    border-radius: 1rem;
    background-color: #ccc;
    box-shadow: 0px 20px 50px #0000002e,0px 6px 16px #0000000a;
  }
  
  @media (min-width: ${breakpoints.xl}) {
    width: 850px;
    min-height: 470px;
    left: 17%;
    display: flex;
    height: 470px;
    background-color: white;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 1px solid #0000001a;
    z-index: 10000000000000000;
    border-radius: 1rem;
    box-shadow: 0px 20px 50px #00000014,0px 6px 16px #0000000a;
    }
    
    @media (min-width: ${breakpoints.xxl}) {
      
  }
`

const EditorExample = styled.video`
  display: flex;  
  width: 870px;
  height: 440px;
  z-index: 120;
  background-color: white;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`

const LogoLumiaPina = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: url("../../../assets/lumia_pina.png");
`

const CarruselContainer = styled.div`
  width: 100%;
  background-color: #fdcfffff;
  position: relative;
  top: 35%;
`

const TextSection = styled.div`
  background-color: #12181F;
  height: 10vh;
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
  color: white;
`
const MainContainer = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate("Projects-menu");
  };
  return (
    <>
      <ContainerInicio className="container-title">
        <ContainerTitle>
          <LogoLumiaPina />
          <Title className="font text">Inserta tus ideas en la nube</Title>
          <Subtitle className="text">
            Notas potenciadas con Agentes de AI, de la forma mas rapida crea mapas y recursos visuales.
          </Subtitle>
          <ButtonFirst type="button" onClick={handlerNavigate}>
            Get Start
          </ButtonFirst>
        </ContainerTitle>
      </ContainerInicio>
      <ContainerEditor>
        <EditorVideo
          src="../../../../public/notion-example-video.mp4"
        />
      </ContainerEditor>
      <CarruselContainer>
        <CardsContainer />
      </CarruselContainer>
    </>
  );
};

export default MainContainer;