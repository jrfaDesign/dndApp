import React from 'react';
import styled from "styled-components"

import { IoIosStarOutline , IoIosStar} from "react-icons/io";
import { IoMdSearch } from "react-icons/io"


import {
    checkNumber,
} from "./utils.js"

export default function SpellListItem (props){

    return ( 
        <Wrapper>
            <Text>{checkNumber(props.level)}</Text>
            <Text><div>{props.name}</div></Text>
            <Text>{props.casting_time}</Text>
            <Text>{props.range}</Text>
            <Text>{props.school}</Text>
            <Text>{props.components}</Text>
            <IoIosStarOutline/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 5% 25% 16.5% 16.5% 16.5% 16.5% 4%;
    white-space: nowrap;
    justify-items: stretch;

    background-color: #1D2B49;
    border-radius: 8px;
    padding:8px;
    margin: 15px 5px;

    svg{
        width: 25px;
        height: 25px;
      };
    
    :hover{
        cursor: pointer;
    }

`

const Text = styled.span`
    text-align: center;

    div {
        margin-left: 50px;
        text-align: left;
    }
`

