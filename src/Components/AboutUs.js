import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import pic from "./Images/new.jpg"

const AboutUs = () => {
    return (
        <Container>
            
            <Wrapper>
            <Header />
                <Title>Mission and Vision</Title>
                <Body>
                    <ol>
                    <li>To make heaven.</li>
                    <li>To take as many people with us.</li>
                    <li>To accomplish No. 1 above, holiness will be our lifestyle.</li>
                    <li>To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries..</li>
                    <li>We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ</li>
                    </ol>
                </Body>
                <Title>Our Structure</Title>
                <Image src={pic}/>
                <Footer />
            </Wrapper>
            
        </Container>
    )
}

export default AboutUs

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
    justify-content: center;
    align-items: center;
    @media (min-width: 200px) and (max-width: 1440px) {
    
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:150px;
    @media (min-width: 200px) and (max-width: 1440px) {

    }
`
const Title = styled.div`
    color: white;
    font-size: 4rem;
    font-weight: 400;
    font-family: 'Lobster', cursive;
`
const Body = styled.div`
    font-size: 22px;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: poppins;
    line-height: 35px;
    color: white;
    font-weight: 400;
    margin: 30px;
    background-color: rgba(0,0,0, 0.8);
    border-radius: 10px;
    padding: 10px;
    
`
const Image = styled.img`
    width: 1000px;
    height: 800px;
    object-fit: cover;
    margin-bottom: 50px;
    @media (min-width: 200px) and (max-width: 1440px) {
        width: 100%;
    }
`