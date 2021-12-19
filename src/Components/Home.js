import React, {useState} from 'react'
import Header from "./Header"
import FirstPart from "./FirstPart"
import SecondPart from "./SecondPart"
import ThirdPart from "./ThirdPage"
import Footer from "./Footer"
import Fourth from "./FourthPart"
import Fifth from "./FifthPart"
import Sixth from "./SixthPart"
import styled from "styled-components"

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Header/>
                <FirstPart />
                <SecondPart />
                <ThirdPart />
                <Fourth />
                <Fifth />
                <Sixth />
                <Footer />
            </Wrapper>
        </Container>
    )
}

export default Home

const Container= styled.div``
const Wrapper = styled.div``
