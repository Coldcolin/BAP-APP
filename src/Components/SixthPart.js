import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from "styled-components"

const SixthPart = () => {
    return (
        <Container>
            <Wrapper>
                <Fade up>
                <LeftPart> Prayer</LeftPart>
                </Fade>
                <Fade up>
                <LeftPart1> Praise</LeftPart1>
                </Fade>
                <Fade up>
                <LeftPart2> Thanks Giving</LeftPart2>
                </Fade>
                <Fade up>
                <LeftPart3> Worship</LeftPart3>
                </Fade>
            </Wrapper>
        </Container>
    )
}

export default SixthPart

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
    background-color: rgba(0,0,0, 0.8);
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
        width: 320px;
    }
    `
const LeftPart1 = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("/pexels-photo-952437.jpeg");
    object-fit: cover;
    background-blend-mode: screen;
    background-color: rgba(0,0,0, 0.8);
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
    background-position: center;
    @media (min-width: 200px) and (max-width: 1000px) {
        width: 320px;
    }
    `
const LeftPart2 = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("pexels-photo-154147.jpeg");
    object-fit: contain;
    background-blend-mode: screen;
    background-color: rgba(0,0,0, 0.8);
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
    background-position: center;
    @media (min-width: 200px) and (max-width: 1000px) {
        width: 320px;
    }
`
const LeftPart3 = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("/for_about.jpeg");
    object-fit: contain;
    background-position: center;
    background-blend-mode: screen;
    background-color: rgba(0,0,0, 0.8);
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
        width: 320px;
    }
`
