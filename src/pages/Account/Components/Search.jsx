import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"
import axios from 'axios';
import { useContext, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { format } from "date-fns";
import GetUserId from "../../../components/Hooks/GetUserId/GetUserId";
import { positionSideContext } from "../../../context/SideProv";

const SearchContainer = styled.div`
  width: 95%;
  height: 60px;
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-self: center;
 `

const SearchBox = styled.input`
  width: 800px;
  height: 100%;
  margin: 0;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  outline: none;
  padding-left: 1rem;
  margin-right: 1rem;
 `

const FilterSearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-left: 1.7rem;
`

const Button = styled.button`
  width: 80px;
  height: 50px;
`;

const Search = () => {
  const refName = useRef(null);
  const { setProjects } = useContext(positionSideContext);

  const handlerEnt = (event) => {
    if (event.keyCode !== 13) {
      return
    }
    handleCreate(event)
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    const UserId = await GetUserId();
    const newProyect = {
      Id: uuidV4(),
      Title: refName.current.value,
      Date: format(new Date(), "yyyy-MM-dd"),
      Folders: [],
      UserId: UserId
    };
    try {
      const res = await axios.post("https://backend-lumiapina-production.up.railway.app/project/create", newProyect, { withCredentials: true });
      setProjects(prevProjects => [...prevProjects, newProyect]);
      refName.current.value = ""
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchContainer>
      <SearchBox
        placeholder="Search your file here...."
        ref={refName} 
        autoFocus 
        type="text" 
        className="form-control me-2" 
        onKeyDown={handlerEnt}
      />
      <Button type='Submit' onClick={handleCreate} className="btn btn-outline-success">Create</Button>
    </SearchContainer>
  )
}

export default Search