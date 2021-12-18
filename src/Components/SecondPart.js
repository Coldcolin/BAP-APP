import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from "styled-components"
import { NavLink} from "react-router-dom"

const SecondPart = () => {
    return (
        <Container>
            <Wrapper>
                <Fade up>
                <LeftPart> Worship with us</LeftPart>
                </Fade>
                <RightPart>
                    <Head>RCCG Blessed Assurance <br></br> Model Parish</Head>
                    <Talk>Worship with us at 8, Oguntokun street, Olodi-Apapa, lagos.<br></br>
                    <ul>
                    <li>Every Sunday from 8am</li>
                    <li>Tuesday's for Digging Deep by 6pm</li>
                    <li>Thursday's for Faith Clinic by 6pm</li>
                    </ul>
                    </Talk>
                    <Button to="/programs">Read More</Button>
                </RightPart>
            </Wrapper>
        </Container>
    )
}

export default SecondPart

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
    padding-top: 50px;
    padding-bottom: 50px;
    /* padding: 20px; */
    /* margin: 40px; */
    @media (min-width: 200px) and (max-width: 1000px) {
        
    }
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
`
const Button = styled(NavLink)`
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
