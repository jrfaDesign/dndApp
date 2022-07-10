import { Link } from "react-router-dom"

import styled from "styled-components"

export default function Header() {
  return (
    <Container>

      <SiteTitle>Wiki Dragon</SiteTitle>
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
  background: #1D2B49;
  padding:40px 80px;
  margin-bottom: 34px;

  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.05);
`

const SiteTitle = styled.span`
  font-size: 50px;
  font-weight: bold;

  color:#fff;
`

const MenuContainer = styled.div `
  width:70%;
  display:flex;
  align-items: center;
  gap: 20px;
`

const LinkAsBtn = styled(Link) `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;
  font-size: 22px;
  text-decoration: none;

`