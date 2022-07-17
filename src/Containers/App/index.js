import React from 'react';
import styled from "styled-components"

//Add Container here
import Header from "../../Containers/Header/index"
//import Footer from "../../Containers/Footer/index"

//Add Components here

import { Routes, Route } from "react-router-dom"
// Add Routes/Pages Router 
import Home from "../../Pages/Home/index"
import SpellBookPage from '../../Pages/SpellBookPage/index'
import SpellList from '../../Pages/SpellList/index'



function App() {
  return (
    <BorderContainer>
      <Header/>
      <MainContainer>
        <RoutesContainer>
          <Routes>
                <Route path="/home" element={ <Home/> } />
                <Route path="my-spell-book" element={ <SpellBookPage/> } />
                <Route path="spell-list" element={ <SpellList/> } />
          </Routes>          
        </RoutesContainer>
      </MainContainer>
    </BorderContainer>
  )
}

export default App;

const BorderContainer = styled.div`
height: 80vh;

`

const MainContainer = styled.div`
  min-height:100%;
  position:relative;
  
  overflow-x:hidden;
`

const RoutesContainer = styled.div`
  
  ;
  
`
