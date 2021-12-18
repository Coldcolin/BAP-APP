import React from 'react'
import Fade from "react-reveal/Fade"
import styled from "styled-components"
const ThirdPage = () => {
    return (
        <Container>
            <Wrapper>
            <RightPart>
                    <Head>Blessed Assurance <br></br> Youths</Head>
                    <Talk>Worship with us at 8, Oguntokun street, Olodi-Apapa, lagos.<br></br>
                    <ul>
                    <li>Every Sunday from 8am</li>
                    <li>Friday's Youth fellowship by 6pm</li>
                    <li>Saturday's for Evangelism by 4pm</li>
                    </ul>
                    </Talk>
                    <Button>Read More</Button>
                </RightPart>
            <Fade right>
            <LeftPart> Open God's word</LeftPart>
            </Fade>
            </Wrapper>
        </Container>
    )
}

export default ThirdPage

const Container = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: 200px) and (max-width: 1000px) {
        display: flex;
        justify-content: center;

    }
`
const Wrapper = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgba(128,0,128, 0.4);
`
const LeftPart = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("/pexels-photo-2325729.jpeg");
    object-fit: cover;
    background-position: center;
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
    margin-bottom: 30px;
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
    @media (min-width: 200px) and (max-width: 1000px) {
        text-align: center;
    }
`
const Talk = styled.div`
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    color: white;
    font-weight: 500;
    margin-top: 10px;
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
    margin-top: 10px;
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
