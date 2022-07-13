import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Card (props) {
    return (
        <Container>
            <LinkDiv to={props.link}>
                <CardLayout {...props}  >
                    <PageTitle>{props.pageTitle}</PageTitle>
                </CardLayout>
            </LinkDiv>
        </Container>
    )
}

const Container = styled.div`


`

const CardLayout = styled.div`
    width: 500px;
    height: 700px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.2);

    background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)),url(${props => props.imgSrc ? props.imgSrc : "#000"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    border-radius: 24px;

    transition: 0.5s;
    

    :hover {
        width: 530px;
        height: 720px;
        background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.53)),url(${props => props.imgSrc ? props.imgSrc : "#000"});
        box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.4);

    }
`
const PageTitle = styled.p `
    text-align: center;
    color: white;
    font-size:32px;
    font-weight: 700;
    
`

const LinkDiv = styled(Link)`
    text-decoration: none;
`