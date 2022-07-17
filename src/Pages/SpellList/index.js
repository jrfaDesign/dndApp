import React from "react";  
import styled from "styled-components";

import Loading from "../../Components/loading/index.js"
import SpellFilerSideBar from "../../Containers/SpellFilterSidebar";
import SpellListItem from "../../Containers/SpellListItem";


function SpellList() {
  const API = "https://www.dnd5eapi.co/api"

  const [appData, setAppData] = React.useState ({})
  const [loading, setLoading] = React.useState (false)

  React.useEffect (() => {    
    fetch(`${API}`)
    .then(res => res.json())
    .then(data => {
        let allData
        let keys = Object.keys(data)
        allData = keys.map ( el => ({"key":el , "value": []}))
         allData.forEach ( (value) => {
          fetch(`${API}/${value.key}`)
            .then(res => res.json())
            .then(data => {
              setAppData( prevState => ({...prevState, [value.key]:data.results}))
            })
         } )

      })
      .catch(err => alert(err)) 
    }, [])

    return (
      <Container>
        <SpellFilerSideBar/>
        <MainContainer>
          <SpellListContainer>
            <Header>
              <h4>Spell Name</h4>
              <h4>Level</h4>
              <h4>Class</h4>
              <h4>Schools</h4>
              <h4>Components</h4>
            </Header>
            <Body>
            {appData.spells 
              ?
              appData.spells.map(el => {
                return (
                  <SpellListItem
                    name={el.name}
                  />
                )
              })
              :
              <LoadingContainer>
                <Loading 
                  size = {70}
                  color = "#ffffff"
                  loading = {true}
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
  margin-bottom: 15px;
  display: flex;
  padding: 0px 8px 15px 8px;


  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  borderbottom-radius:0 10px 10px 0;
  
  h4{
    font-size:20px;
    width: 19.7%;
  }

`

const Body = styled.div `
  overflow-y: scroll;
  height: 60vh;
`

const LoadingContainer = styled.div`
  margin-top:150px;
  display: flex;
  justify-content: center;
  align-items: center;

`
