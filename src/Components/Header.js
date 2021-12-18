import React from 'react'
import styled from "styled-components"
import logo from "./Images/Logo-removebg-preview.png"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <Links>
                <Home to="/" >Home</Home>
                <About to="/About">About Us</About>
                {/* <About to="">Give</About> */}
                </Links>
                <Dots>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Dots>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({ bg }) => (bg ? "purple" : "rgba(0,0,0, 0.3)")};
    position: fixed;
    top: 0;
    z-index: 10;
    @media (min-width: 200px) and (max-width: 1000px) {
        
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 50px;
`
const Links = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-right: -600px;
    @media (min-width: 200px) and (max-width: 1000px) {
        display: none;
    }
`
const Home = styled(NavLink)`
    font-size: 20px;
    color: white;
    font-weight: bold;
    font-family: poppins;
    text-decoration: none;
    cursor: pointer;
`
const About = styled(NavLink)`
    font-size: 20px;
    color: white;
    font-weight: bold;
    font-family: poppins;
    text-decoration: none;
    cursor: pointer;
`
const Dots = styled.div`
    width: 50px;
    margin: 15px;
`
const Line = styled.div`
    width: 100%;
    height: 8px;
    background-color: white;
    margin: 5px;
    border-radius: 5px;
    /* display: none; */
    @media (min-width: 1000px) {
        display: none;
    }
`