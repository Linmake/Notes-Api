import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from "../../pages/components/Main/CardsContainer";
import HomeContainer from '../../pages/components/Main/HomeContainer';

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