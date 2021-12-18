import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Up>
                    <Title>Accept Christ today</Title>
                    <ul>
                    <li> Acknowledge all your sins Acts 2:36 - 38</li>
                    <li> Confess those sins. Galatians 5:19 - 21</li>
                    <li>Ask for forgiveness of sin . I John 1:9</li>
                    <li>Repent of those sins. Act 3:19</li>
                    <li>Forsake all your old way and sinful habit Luke 14: 33</li>
                    <li>Join a Bible believing Church around. Hebrew 10:25</li>
                    </ul>
                </Up>
                <Down>Copyright 2021 © All rights Reserved. </Down>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #390257;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Up = styled.div`
    width: 100%;
    height: 80%;
    color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`
const Down = styled.div`
    width: 100%;
    height: 20%;
    background-color: #210132;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.39);
    font-size: 15px;
    font-weight: 300;
    line-height: 15px;
`
const Title = styled.div`
    color: white;
    font-size: 4rem;
    font-weight: 400;
    font-family: 'Lobster', cursive;
    @media (min-width: 200px) and (max-width: 1000px) {
        text-align: center;
    }
`