import React from 'react';
import styled from "styled-components"

import Form from 'react-bootstrap/Form';
import Select from "../../Components/select/index.js"
import Check from "../../Components/checkRadio/index.js"

import { IoMdSearch } from "react-icons/io"

export default function SideBar() {

  const handleSelect = (e) => {
    console.log(e)
  }


  return (
    
    <Container>
      <Form>
               
        <Wrapper>
          <SearchWrapper>
            <IoMdSearch />
            <Input placeholder="Spell Name..."></Input>
          </SearchWrapper>

          <Select 
          placeholder= "Spell Level"
          onChange={handleSelect}
          >
            <StyledOption value="0">Cantrip</StyledOption>
            <StyledOption value="1">1st Level</StyledOption>
            <StyledOption value="2">2nd Level</StyledOption>
            <StyledOption value="3">3rd Level</StyledOption>
            <StyledOption value="4">4th Level</StyledOption>
            <StyledOption value="5">5th Level</StyledOption>
            <StyledOption value="6">6th Level</StyledOption>
            <StyledOption value="7">7th Level</StyledOption>
            <StyledOption value="8">8th Level</StyledOption>
            <StyledOption value="9">9th Level</StyledOption>
          </Select> 

          <Select
            placeholder= "Spell Level"
            onChange={handleSelect}
            >
            <StyledOption value="Artificer">Artificer</StyledOption>
            <StyledOption value="Bard">Bard</StyledOption>
            <StyledOption value="Druid">Druid</StyledOption>
            <StyledOption value="Paladin">Paladin</StyledOption>
            <StyledOption value="Ranger">Ranger</StyledOption>
            <StyledOption value="Sorcerer">Sorcerer</StyledOption>
            <StyledOption value="Warlock">Warlock</StyledOption>
          </Select>

          <Select
          placeholder= "Spell Level"
          onChange={handleSelect}
          >
            <StyledOption value="Artificer">Abjuration</StyledOption>
            <StyledOption value="Bard">Conjuration</StyledOption>
            <StyledOption value="Druid">Divination</StyledOption>
            <StyledOption value="Paladin">Enchantment</StyledOption>
            <StyledOption value="Ranger">Evocation</StyledOption>
            <StyledOption value="Sorcerer">Illusion</StyledOption>
            <StyledOption value="Warlock">Necromancy</StyledOption>
            <StyledOption value="Warlock">Transmutation</StyledOption>
          </Select>

          <CheckBoxWrapper>
            <Check
              inline
              label="V"
              name="v"
              type='checkbox'
              id={`inline-'checkbox'-1`}        
            /> 
            <Check
              inline
              label="S"
              name="s"
              type='checkbox'
              id={`inline-'checkbox'-2`}        
            /> 
            <Check
              inline
              label="M"
              name="m"
              type='checkbox'
              id={`inline-'checkbox'-3`}        
            /> 
          </CheckBoxWrapper>



          
          
        </Wrapper>
      </Form>
    </Container>
  )
}
  

const Container = styled.div `
  background: #121C35;
  border-radius: 8px;
` 
const Wrapper = styled.div `
  padding: 25px 20px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: left;
`

const SearchWrapper = styled.div `
  display: flex;
  align-items: center;
  background: #202A41;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 6.5px;
  padding: 10px 10px 9px 10px;

  svg{
    margin:0px 3px;
  }
`

const Input = styled.input `
  background: transparent !important;
  border: none;
  margin: 0px 5px;

  font-size: 14px;

  :focus{
    outline:0;
`

const StyledOption = styled.option`
    color: white;
    border: none;
    border-radius: 6.5px;
    hover{
      background-color:red;
    }
`

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: stretch;
  align-items: center;
  gap: 20px;

  

  label{
    margin-left:4px;

  }

`
