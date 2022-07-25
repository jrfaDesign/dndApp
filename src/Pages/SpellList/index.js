import React from "react";  
import styled from "styled-components";

import Loading from "../../Components/loading/index.js"
import SpellFilerSideBar from "../../Containers/SpellFilterSidebar";
import SpellListItem from "../../Containers/SpellListItem";


function SpellList() {
  const API = "https://www.dnd5eapi.co/api/spells"

  const [spellData, setSpellData] = React.useState ([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect (() => {   
    setLoading(true)
    
    fetch (API)
      .then (res => res.json())
      .then (data => {
        data.results.map ( spell => {
          fetch(`${API}/${spell.index}`)
            .then(res => res.json())
            .then(data => {
              setSpellData ( prevState => [...prevState, data])
            })
        })
        setLoading(false)
        
      })
    }, [])

    console.log(spellData)


    return (
      <Container>
        <SpellFilerSideBar/>
        <MainContainer>
          <SpellListContainer>
            <Header>
              <h4>Level </h4>
              <h4> <div> Spell Name </div></h4>
              <h4>Casting Time</h4>
              <h4>Range</h4>
              <h4>Schools</h4>
              <h4>Components</h4>
              <h4></h4>
            </Header>
            <Body>
              {
                !loading
                ?
                  spellData.map ( (el, i) => {
                    console.log(el)
                    return (
                      <SpellListItem
                        key = {i}

                        level = {el.level}
                        name = {el.name}
                        casting_time = {el.casting_time}
                        range = {el.range}
                        school = {el.school.name}
                        components = {el.components}
                      />
                    )
                  })
                : 
                  <LoadingContainer>
                    <Loading 
                      size = {70}
                      color = "#ffffff"
                      loading = {loading}
                    />
                  </LoadingContainer>
              }

            </Body>
            
          </SpellListContainer>

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
  margin-left: 20px;
  padding: 20px;
  width:100%;  
  background-color: #121C35;
  border-radius: 8px;

`

const SpellListContainer = styled.div`

`
  
const Header = styled.div `
  display: grid;
  grid-template-columns: 5% 25% 16.5% 16.5% 16.5% 16.5% 4%;
  white-space: nowrap;
  justify-items: stretch;

  margin-bottom: 15px;
  padding: 0px 20px 15px 8px;


  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  borderbottom-radius:0 10px 10px 0;
  
  h4{
    font-size:20px;

    text-align: center;
    
  }

  div {
    margin-left: 50px;
    text-align: left;
  }

`

const Body = styled.div `
  overflow-y: scroll;
  height: 60vh;


::-webkit-scrollbar {
  width: 2px;
}


::-webkit-scrollbar-track {
  background: #F3F6FF;
  
}


::-webkit-scrollbar-thumb {
  background: #3290FF;
  padding: 20px 10px 20px 10px;
  border-radius: 4px 0px 0px 4px;
}


::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

const LoadingContainer = styled.div`
  margin-top:150px;
  display: flex;
  justify-content: center;
  align-items: center;

`
