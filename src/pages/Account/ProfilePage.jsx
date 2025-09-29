import styled from "styled-components";
import { UseData } from "../../context/dataContext";
import BoardListComponent from "./Components/BoardList";
import { positionSideContext } from "../../context/SideProv";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Project from "../../components/ProjectsMenu/Project";
import SettingsBoard from "./Components/SettingsBoard";
import TagsBanner from "./Components/TagsBanner";
import Display from "./Components/Display";
import Profile from "./Components/Profile";
import Search from "./Components/Search";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  align-items: center;
  user-select: none;
  margin: 0;
`;

const ParentContent = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  
`;

const Onboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5%;
  height: 100%;
  align-items: center;
  padding-top: 6%;
  background-color: #ffffffff;
  gap: 0.7rem;
  color: #1d2936ff;
  font-size: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(158, 162, 165, 0.2) 0px 8px 24px;
  position: absolute;
  left: 0;
`;

const MainCore = styled.div`
  position: absolute;
  left: 12.4%;
  width: 72.1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDFDFD;
`

const ProjectsContent = styled.div`
  max-width: 1300px;
  border-radius: 0.3rem;
  height: 620px;
  align-items: center; 
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 5rem;
  overflow-y: auto;
`

const ProfilePage = () => {
  const [cookie, setCookie] = useState(null);
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject } = UseData();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setCookie(document.cookie);
        const { data } = await axios.get(`https://backend-lumiapina-production.up.railway.app/project/all`, { withCredentials: true });
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [setProjects, setProject, setData]);

  return (
    <Container>
      <ParentContent>
        <Onboard>
          <BoardListComponent />
          <SettingsBoard/>
        </Onboard>
        <MainCore>
          <Search/>
          <TagsBanner/>
          <Display/>
          <ProjectsContent>
            {projects.map((project, index) => (
                  <Project Title={project.Title} Id={project.Id} key={index} />
                   ))}
          </ProjectsContent>
        </MainCore>
        <Profile />
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;