import React, {useState, useEffect} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import {db} from "../base"

const Testimonies = () => {
    const [data, setData] = useState([])
    const colRef = collection(db, "Testimonies")
    const getTest = async ()=>{
        onSnapshot(colRef, (snapshot) =>{
            let r=[]
            snapshot.forEach((doc) =>{
                r.push({...doc.data(), id: doc.id})
            })
            setData(r)
        })
    }

    useEffect(()=>{
        getTest()
    }, [])
    return (
        <Container>
        <Header/>
            <Wrapper>
                <Holder>
                {
                    data?.map((props, id) =>(
                        <Card key={id}>
                    <Name>{props.name}</Name>
                    <Testimoni>{props.testimony}.</Testimoni>
                    </Card>
                    ))
                }
                </Holder>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Testimonies

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
    align-items: center;
    
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(200vh - 70px);
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
const Card = styled.div`
    width: 800px;
    height: 100%auto;
    background-color: rgba(0,0,0, 0.6);
    border-radius: 20px;
    color: white;
    margin-top: 20px;
    padding: 10px;
    @media (min-width: 200px) and (max-width: 1440px) {
        width: 100%;
    }
`
const Name = styled.div`
    text-transform: capitalize;
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    color: white;
    font-weight: 500;
    margin-top: 10px;
    color: yellow;
`
const Testimoni = styled.div`
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
    line-height: 29px;
    color: white;
    font-weight: 500;
    margin-top: 10px;
    @media (min-width: 200px) and (max-width: 1440px) {
        font-size: 16px;
    }
`
const Holder = styled.div`
    display: flex;
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px;
`