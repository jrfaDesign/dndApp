import React from 'react';
import styled from "styled-components"

export default function SideBar() {
  return (
    <Container>
      <Wrapper>
        <SearchWrapper>
          <Input placeholder="Spell Name..."></Input>
        </SearchWrapper>

        <select name="cars" id="cars" >
          <option value="volvo">Cantrip</option>
          <option value="saab">1st Level</option>
          <option value="mercedes">2nd Level</option>
          <option value="audi">3rd Level</option>
          <option value="saab">4th Level</option>
          <option value="mercedes">5th Level</option>
          <option value="audi">6th Level</option>
          <option value="saab">7th Level</option>
          <option value="mercedes">8th Level</option>
          <option value="audi">9th Level</option>
        </select>

        <select name="cars" id="cars" >
          <option value="volvo">Artificer</option>
          <option value="saab">Bard</option>
          <option value="mercedes">Druid</option>
          <option value="audi">Paladin</option>
          <option value="saab">Ranger</option>
          <option value="audi">Sorcerer</option>
          <option value="saab">Warlock</option>
          <option value="mercedes">Wizard</option>
        </select>
        
        <select name="cars" id="cars" >
          <option value="volvo">Abjuration</option>
          <option value="saab">Conjuration</option>
          <option value="mercedes">Divination</option>
          <option value="audi">Enchantment</option>
          <option value="saab">Evocation</option>
          <option value="mercedes">Illusion</option>
          <option value="audi">Necromancy</option>
          <option value="saab">Transmutation</option>
        </select>

        <div>
        <input type="checkbox" id="check_1" name="check_1" value="check_1"/>
        <label for="check_1">V</label>
        <input type="checkbox" id="check_1" name="check_1" value="check_1"/>
        <label for="check_1">S</label>
        <input type="checkbox" id="check_1" name="check_1" value="check_1"/>
        <label for="check_1">M</label>
        </div>


        
      </Wrapper>
    </Container>
  )
}
  

const Container = styled.div `
  max-width:28%;
  width:100%;
  background: #1D2B49;
  border-radius: 8px;
` 
const Wrapper = styled.div `
  padding: 25px 20px;
  gap: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: left;
`

const SearchWrapper = styled.div `
  background: #202A41;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 6.5px;
  padding: 2px 0px;
`

const Input = styled.input `
  background: transparent !important;
  border: none;
  margin: 0px 15px;

  font-size: 14px;

  :focus{
    outline:0;
`