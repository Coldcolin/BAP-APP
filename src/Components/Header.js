import React, {useState}from 'react'
import Drop from "./Dropdown"
import styled from "styled-components"
import logo from "./Images/Logo-removebg-preview.png"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const Change = () => {
        setToggle(true)
    }
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <Links>
                <Home to="/" >Home</Home>
                <About to="/About">About Us</About>
                <About to="">Give</About>
                </Links>
                <Dots onClick={Change}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    {/* <Drop/> */}
                </Dots>
            </Wrapper>
            {
                toggle? <Drop setToggle = {setToggle} toggle={toggle}/> : null
            }
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(0,0,0, 0.4);
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
    margin-right: -1000px;
    @media (min-width: 200px) and (max-width: 1024px) {
        margin-right: -750px;
    }
    @media (max-width: 425px) {
        display: none;
    }
    @media (max-width: 768px) {
        margin-right: 0.5%;
        width: 28%;
    }
`
const Home = styled(NavLink)`
    font-size: 18px;
    color: white;
    font-weight: bold;
    font-family: poppins;
    text-decoration: none;
    cursor: pointer;
`
const About = styled(NavLink)`
    font-size: 18px;
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
    width: 80%;
    height: 5px;
    background-color: white;
    margin: 5px;
    border-radius: 5px;
    /* display: none; */
    @media (min-width: 768px) {
        display: none;
    }
`