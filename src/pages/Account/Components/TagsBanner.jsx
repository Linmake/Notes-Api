import styled from "styled-components"

const Container = styled.div`
  width: 1300px;
  border-radius: 0.3rem;
  height: 13vh;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

const Item = styled.div`
  width: 420px;
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
`

const TagsBanner = () => {
    return (
        <Container>
            <Item>
              Product Design
            </Item>
            <Item>
              Product Design
            </Item>
            <Item>
              Product Design
            </Item>
          </Container>
    )
}

export default TagsBanner