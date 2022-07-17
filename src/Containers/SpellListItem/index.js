import React from 'react';
import styled from "styled-components"

export default function SpellListItem (props){

    return ( 
        <Wrapper>
            <p>{props.name}</p>
            <p>level</p>
            <p>Class</p>
            <p>school</p>
            <p>Vsm</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background-color: #1D2B49;
    border-radius: 8px;
    padding:8px;
    margin: 15px 0;


    p{
        width: 20%;
    }
    
    :hover{
        cursor: pointer;
    }
`

