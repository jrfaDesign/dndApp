import styled from "styled-components";

import SideBar from "../../Containers/Sidebar";

function SpellList() {
    return (
      <Container>
        <SideBar/>
        <MainContainer>
          <h1>Spell List Page</h1>
        </MainContainer>
      </Container>
    )
  }
  
export default SpellList;

const Container = styled.div `
  display: flex; 
  justify-content:space-between; 
  
  margin: 0 30px;
  
` 

const MainContainer = styled.div `
  max-width:69%;
  width:100%;  
  background-color: #121C35;
  border-radius: 8px;

`
  
