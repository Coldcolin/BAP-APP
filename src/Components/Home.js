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
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
    // const check = window.scrollY;
    // console.log(check);

    if (window.scrollY >= 100) {
        setToggle(true);
    } else {
        setToggle(false);
    }
    };

    window.addEventListener("scroll", onToggle);
    return (
        <Container>
            <Wrapper>
                <Header bg={toggle ? "bg" : ""}/>
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
