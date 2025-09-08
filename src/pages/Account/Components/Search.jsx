import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const SearchContainer = styled.div`
  width: 95%;
  height: 60px;
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
 `

const SearchBox = styled.input`
  width: 1250px;
  height: 100%;
  margin: 0;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  outline: none;
  padding-left: 1rem;
 `

const FilterSearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
 margin-left: 1.7rem;
`

const Search = () => {

    return (
        <SearchContainer>
            <SearchBox
                placeholder="Search your file here...."
            />
            <FilterSearchIcon icon={faFilter} />
        </SearchContainer>
    )
}

export default Search