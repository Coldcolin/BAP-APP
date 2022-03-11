import React from 'react'
import Fade from 'react-reveal/Fade';
import { ExternalLink } from 'react-external-link';
import styled from "styled-components"


const FirstPart = () => {
    return (
        <Container>
            <Wrapper>
                <Fade left>
                <BigWords>Welcome to <br/>RCCG Blessed Assurance Parish</BigWords>
                </Fade>
                {/* <Button htmlFrom="pic">Learn More</Button> */}
                <ExternalLink href="https://www.rccg.org/" id="pic">
                <span style={{width: "300px", color: 'white', fontSize: "24px", textDecoration: "none", fontWeight: "bold", backgroundColor: "purple", borderRadius: "10px", height: "50px", margin: "5px", padding: "10px" }}>Learn More</span>
                </ExternalLink>
            </Wrapper>
        </Container>
    )
}

export default FirstPart

const Container = styled.div`
    width: 100%;
    height: 110vh;
    background-image: url("/toppage.jpg");
    background-size: cover;
    background-position: center;
    background-color: rgba(128,0,128, 0.4);
    background-blend-mode: screen;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 200px) and (max-width: 1000px) {
        height: 120vh;
    }
`
const Wrapper = styled.div`
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -600px;
    flex-wrap: wrap;
    
    @media (min-width: 200px) and (max-width: 1024px) {
        margin-left: 0px;
        padding: 10px;
    }
`
const BigWords = styled.div`
    width: 100%;
    height: auto;
    color: white;
    font-size: 64px;
    font-weight: 700;
    font-family: poppins;
    border-radius: 5px;
    padding-left: 20px;
    background-color: rgba(0,0,0, 0.1);
    margin-bottom: 50px;
    @media (min-width: 200px) and (max-width: 1000px) {
        font-size: 24px;
        font-weight: 700;
        margin-top: 50px;
    }
`
const Button = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 20px;
    color: white;
    background-color: purple;
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    font-weight: 700;
    margin-top: 50px;
    margin-left: -650px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;
    transform: scale(1);

    :hover{
        cursor: pointer;
        background-color: #210132;
        transition: all 350ms;
        transform: scale(1.05);
    }
    @media (min-width: 200px) and (max-width: 1000px) {
        margin-left: 0px;
        padding: 10px;
    }
`
