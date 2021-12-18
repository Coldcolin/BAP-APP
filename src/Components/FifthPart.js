import React, {useState} from 'react'
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection } from 'firebase/firestore'
import {db} from "../base"
import {useNavigate} from "react-router-dom"

const FifthPart = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [testimony, setTestimony] = useState("")
    const [hold, setHold] = useState({})
    const [loading, setLoading] = useState(false)
    const schema = yup.object().shape({
        name: yup.string().required("Please input your name"),
        testimony: yup.string().required("Please input your testimony")
    })
    const {register,handleSubmit,formState:{errors},reset} = useForm({resolver: yupResolver(schema)})
    const onHold = (e)=>{
        setHold({...hold, [e.target.name] : e.target.value})
    }

    const pushData = handleSubmit(async (value)=>{
      
        const {name, testimony} = value
        const  colRef = collection(db, "Testimonies")
        const payload={
            name,
            testimony
        }
        await addDoc(colRef, payload)

    
        console.log(value)
        navigate("/tests")
        reset()
        setLoading(true)
    })
    
    
    return (
        <Container>
            <Wrapper>
            <RightPart onSubmit={pushData}>
                    <Head>Add Your Testimonies</Head>
                    <Talk>
                    <Holder><Error>{errors?.name?.message}</Error></Holder>
                    <Name placeholder="Name" name="name"
                        onChange={onHold}
                        {...register("name")}/>
                        <Holder><Error>{errors?.testimony?.message}</Error></Holder>
                    <Testimony placeholder="Add Testimony here" name="testimony"
                        onChange={onHold}
                        {...register("testimony")}/>
                    </Talk>
                    <Button disable={loading} type="submit">Submit</Button>
                </RightPart>
            <Fade right>
            <LeftPart> God has been so good!</LeftPart>
            </Fade>
            </Wrapper>
        </Container>
    )
}

export default FifthPart

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    /* margin-top: 40px;
    margin-bottom: 40px; */
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgba(128,0,128, 0.4);
`
const LeftPart = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-image: url("/Testimony.jpeg");
    object-fit: cover;
    background-position: center;
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
const RightPart = styled.form`
    width: 500px;
    height: 300px;
    margin-bottom: 30px;

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
    color: white;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
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
    outline: : none;
    border: none;

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
const Name = styled.input`
    width: 400px;
    height: 50px;
    outline: none;
    border: none;
    margin: 10px;
    border-radius: 10px;
`

const Testimony = styled.input`
    width: 400px;
    height: 50px;
    outline: none;
    border: none;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
`
const Holder = styled.div`
width: 150px;
display: flex;
`
const Error = styled.div`
font-size: 10px;
font-weight: bold;
color: red;
`