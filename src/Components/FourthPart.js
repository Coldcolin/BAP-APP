import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const FourthPart = () => {
    return (
        <Container>
            <Wrapper>
                <Fade up>
                <LeftPart> Testimonies</LeftPart>
                </Fade>
                <RightPart>
                    <Head>Divine Healing <br></br> <span>James Okorie</span></Head>
                    <Talk>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </Talk>
                    <Button to="/tests">Read More</Button>
                </RightPart>
            </Wrapper>
        </Container>
    )
}

export default FourthPart

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`
const Wrapper = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 20px; */
    /* margin: 40px; */
    padding-top: 50px;
    padding-bottom: 50px;
`
const LeftPart = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("/pexels-photo-2774546.jpeg");
    object-fit: cover;
    background-blend-mode: screen;
    background-color: rgba(128,0,128, 0.4);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 400;
    font-family: 'Lobster', cursive;
    line-height: 29px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 50px;
    @media (min-width: 200px) and (max-width: 1000px) {
        width: 100%;
    }
`
const RightPart = styled.div`
    width: 500px;
    height: 300px;
    margin-bottom: 50px;
    @media (min-width: 200px) and (max-width: 1000px) {
        width: 100%;
    }
`
const Head = styled.div`
    color: #390257;
    font-size: 35px;
    font-weight: 700;
    line-height: 32px;
    font-family: poppins;

    span{
        font-size: 25px;
    }
    @media (min-width: 200px) and (max-width: 1000px) {
        text-align: center;
    }
`
const Talk = styled.div`
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    color: #484748;
    font-weight: 400;
    margin-top: 10px;

    @media (min-width: 200px) and (max-width: 1000px) {
        font-size: 15px;
        padding-left: 20px;
    }
`
const Button = styled(NavLink)`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    color: white;
    background-color: purple;
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    font-weight: 700;
    margin-top: 10px;
    text-decoration: none;
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
        margin-left: 100px;
        margin-bottom: 50px;
    }
`