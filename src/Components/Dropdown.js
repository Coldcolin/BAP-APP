import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const Dropdown = (props) => {
    const close = () =>{
        props.setToggle(false)
    }
    return (
        <Container>
            <Wrapper>
                <Close onClick={close}>X</Close>
                <Home to="/">Home</Home>
                <Home to ="/about">About</Home>
                <Home to="/">Give</Home>
            </Wrapper>
        </Container>
    )
}

export default Dropdown

const Container = styled.div`
    width: 200px;
    height: 400px;
    background-color: white;
    margin-left: 50%;
    border-radius: 10px;
    @media (min-width: 768px) {
        display: none;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Home = styled(NavLink)`
    text-decoration: none;
`
const Close = styled.div``
