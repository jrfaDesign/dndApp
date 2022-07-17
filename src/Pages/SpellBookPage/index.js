import React from "react";
import styled from "styled-components";

import SpellFilerSideBar from "../../Containers/SpellFilterSidebar";




function SpellBookPage() {   
    return (
      <Container>
        <SpellFilerSideBar/>
        <MainContainer>
          <h1>Spell Book Page</h1>
        </MainContainer>
      </Container>
    )
  }
  
export default SpellBookPage;

const Container = styled.div `
  display: flex; 
  justify-content:space-between; 

  margin: 0 30px;
` 

const MainContainer = styled.div `
  margin-left: 20px;
  padding: 20px;
  width:100%;  
  background-color: #121C35;
  border-radius: 8px;

`
  
