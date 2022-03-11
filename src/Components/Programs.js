import React from 'react'
import styled from "styled-components"
import pic from "./Images/new.jpg"
import Header from "./Header"

const Programs = () => {
    return (
        <Container>
            <Wrapper>
            <Header/>
                <Image src={pic}/>
            </Wrapper>
        </Container>
    )
}

export default Programs

const Container = styled.div`
width: 100%;
    min-height: calc(200vh - 70px);
    background-image: url("/for_about.jpeg");
    background-size: cover;
    background-position: bottom;
    background-color: rgba(128,0,128, 0.4);
    background-blend-mode: screen;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:150px;
    flex-wrap: wrap;
    
    @media (min-width: 200px) and (max-width: 1440px) {
        width: 100%;
    }
`
const Image = styled.img`
    width: 800px;
    height: 500px;
    object-fit: cover;
    @media (min-width: 200px) and (max-width: 1440px) {
        width: 300px;
    }
`