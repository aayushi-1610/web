import React from "react";
import styled from "styled-components";

const EcoTip=styled.div`
height:max-content;
width:30%;
background-color:#EAF1B1;
position:absolute;
right:10%;
top:25%;
padding:3rem;
font-family:poppins;
border-radius:5%;
@media(max-width:768px){
width:80%;
height:30%;


}
`

const Title=styled.div`

font-size:1.3rem;
`
const Paragraph=styled.div`

font-size:0.8rem;
`

function Ecotip()
{
    return(
        <>
        <EcoTip>
            <Title>
            Eco-Tip of the day :<p><strong> Reduce Water Usage</strong></p>
            </Title>
            <Paragraph>
            One simple yet effective way to conserve water is to install low-flow showerheads and faucet aerators. These devices can significantly reduce water usage without compromising water pressure, helping to save both water and energy used to heat the water.
            </Paragraph>
        </EcoTip>
        </>
    )
}

export default Ecotip;