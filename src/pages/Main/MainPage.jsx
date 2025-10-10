import MainContainer from '../components/Main/MainContainer';
import MainHeader from '../../components/Header/MainHeader';
import CardsContainer from '../components/Main/CardsContainer';

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
      <MainHeader mainRoute={"https://lumiapina.com"}/>
      <MainContainer/>
      <CardsContainer/>               
    </> 
  )
}

export default MainPage