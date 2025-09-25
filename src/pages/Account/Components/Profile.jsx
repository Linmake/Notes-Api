import styled from "styled-components"
import profileImg from "../../../assets/people.png";
import { faBell, faInbox, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { UseData } from "../../../context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ← Ruta corregida

const Container = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 15.5%;
  height: 100%;
  align-items: center;
  padding-top: 6%;
  background-color: #ffffff; // ← También corregí #fffff a #ffffff
  color: #1d2936ff;
  font-size: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(158, 162, 165, 0.2) 0px 8px 24px;
`;
const LogoImg = styled.img`
  border: 1px solid #bebebe;
  border-radius: 55%;
  width: 72px;
  height: 72px;
  box-sizing: border-box;
`;
const MessageText = styled.p`
  margin-top: 1rem;
  color: black;
  font-size: 1.1rem;
  text-align: center;
`

const MessageSecond = styled.p`
  color: black;
  font-size: 0.8rem;
  text-align: center;
`
const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 64%;
  height: fit-content;
`
const Icons1 = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #9E9E9E;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconsFont = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
`

const Profile = () => {

    const { setName, name } = UseData()

    const fecha = new Date()
    const hora_actual = fecha.getHours()
    const minute_actual = fecha.getMinutes()

    return (
        <Container>
            <LogoImg src={profileImg} />
            <MessageText>
                Good Night {(name) ? name : "User"}
                <br />
                Time: {hora_actual}:{minute_actual}
            </MessageText>
            <MessageSecond>
                Continue Your Journey And Archive
                <br />
                Your Target
            </MessageSecond>
            <ContainerIcons>
                <Icons1>
                    <IconsFont icon={faBell} />
                </Icons1>
                <Icons1>
                    <IconsFont icon={faInbox} />
                </Icons1>
                <Icons1>
                    <IconsFont icon={faTrophy} />
                </Icons1>
            </ContainerIcons>
        </Container>
    )
}

export default Profile