import styled from "styled-components"



const Container = styled.div`
  width: 1300px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`

const Signs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 0.7rem;
`

const LeftArrow = styled.div`
  width: 40px;
  height: 40px;
`

const RightArrow = styled.div`
  width: 40px;
  height: 40px;
`

const Display = () => {
    return (
        <Container>
            Continue Watching
            <Signs>
              <LeftArrow>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52"
                  strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 13l-7 7 7 7" />
                </svg>
              </LeftArrow>
              <RightArrow>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52"
                  strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l7 7-7 7" />
                </svg>
              </RightArrow>
            </Signs>
          </Container>
    )
}

export default Display