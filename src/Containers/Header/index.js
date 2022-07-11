import { NavLink, Link } from "react-router-dom"

import styled from "styled-components"

export default function Header() {
  return (
    <Container>

      <SiteTitle to="/home">Wiki Dragon</SiteTitle>
      <MenuContainer>
        <LinkAsBtn to="/home">Home</LinkAsBtn>
        <LinkAsBtn to="/my-spell-book">My Spell Book</LinkAsBtn>
        <LinkAsBtn to="spell-list">Spell List</LinkAsBtn>
      </MenuContainer>

    </Container>
  )
}

const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #121C35;
  padding:40px 80px;
  margin-bottom: 34px;

  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.05);
`

const SiteTitle = styled(Link)`
  font-size: 50px;
  font-weight: bold;

  color:#fff;
  text-decoration: none;
`

const MenuContainer = styled.div `
  width:70%;
  display:flex;
  align-items: center;
  gap: 20px;
`

const LinkAsBtn = styled(NavLink) `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: white;
  font-size: 22px;
  text-decoration: none;
  padding:30px 10px 20px 10px;

  transition: 0.5s;

  &:hover,
  &:focus {
    
    border-bottom: 2px solid #3290FF;
    transition: all 0.5s;
    background: linear-gradient(180deg, rgba(50, 144, 255, 0) 30%, rgba(50, 144, 255, 0.07) 100%);
    border-bottom: 2px solid #3290FF;
  };
  


  }


`