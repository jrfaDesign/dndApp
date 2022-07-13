import Form from "react-bootstrap/Form"
import styled from "styled-components"

const StyledSelect = styled(Form.Select) `
    background: #202A41;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 6.5px;
    padding: 9px 5px;
    font-size: 14px;

    transition:0.3s;
    
    :hover,
    :focus {
        background: #202A41;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 6.5px;
        padding: 9px 5px;
        font-size: 14px;
    },

`


export default StyledSelect

