import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from "./components/Index/CardsContainer";
import HomeContainer from './components/Index/HomeContainer';

/*
const sizes = {
  laptop: 1920,
}

const media = {
  laptop: `(min-width: ${sizes.laptop})`,
}*/

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