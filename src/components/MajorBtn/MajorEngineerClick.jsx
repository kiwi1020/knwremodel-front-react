import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const EngineerContainer = styled.div`
display: flex;
flex-direction: column;
width: 17.2rem;
height: 21rem;
box-shadow: 5px 2px 8px 1px #D3D3D3;
border-radius: 1.25rem;
margin-top: 2rem;
`;
const ICTBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const AIBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const ContructBtn = styled.div`
display: flex;
width: 100%;
height: 33.3%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;


function MajorEngineerClick() {
    return (
        <EngineerContainer>
            <ICTBtn>ICT융합공학부</ICTBtn>
            <AIBtn>인공지능융합공학부</AIBtn>
            <ContructBtn>부동산건설학부</ContructBtn>
        </EngineerContainer>
           
    );
}

export default MajorEngineerClick;