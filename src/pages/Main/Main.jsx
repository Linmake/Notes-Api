import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from "../../pages/components/Main/CardsContainer";
import HomeContainer from '../../pages/components/Main/HomeContainer';

const breakpoints = {
  xsm: "376px",
  sm: "576px",  // móviles horizontales / tablets pequeñas
  md: "768px",  // tablets verticales
  lg: "905px",  // laptops pequeñas
  xl: "1200px", // pantallas grandes
  xxl: "1400px", // TVs/monitores extra grandes
};

const MainPage = () => {
  return (
    <>
      <MainHeader mainRoute={"https://lumiapina.com"} />
      <HomeContainer/>
      <CardsContainer/>                   
    </> 
  )
}
export default MainPage