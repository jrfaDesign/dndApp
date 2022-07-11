import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

//Add Components here
import Card from "../../Components/cards/index"
import SpellListImg from "../../Assets/imgs/spell-list.jpg"
import SpellBookImg from "../../Assets/imgs/spell-book.jpg"
import CommingSoonImage from "../../Assets/imgs/comming-soon.jpg"
import SpellSlotsImage from "../../Assets/imgs/spell-slots.png"

function HomePage() {

  return (
    <Container>
      <CardsContainer>
        <Card 
          imgSrc = {SpellListImg}
          pageTitle = {"Spell List"}
          link= {"spell-list"}
        />

        <Card 
          imgSrc = {SpellBookImg}
          pageTitle = {"My Spell Book"}
          link={"my-spell-book"}
        />

        <Card 
          imgSrc = {SpellSlotsImage}
          pageTitle = {"Spell Slots"}
          link={""}
        />

        <Card 
          imgSrc = {CommingSoonImage}
          pageTitle = {"Coming Soon..."}
          link={""}
        />

        
      </CardsContainer>

    </Container>
  )
}
  
export default HomePage;

const Container = styled.div`

`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  gap: 25px
`

