import React from 'react'
import styled from 'styled-components'
import GlobalCards from './GlobalCards'
import img from "./Assets/coding.png"
import fifa from "./Assets/fifa.png"

const Cup = () => {
  return (
    <Container>
        <GlobalCards 
        mid= {fifa}
        wid="gdhdg"
        img={img} 
        fd ="gfh" 
        txt="Have you caught World Cup fever yet? With matches beginning in November, excitement is high all around the world. As part of the celebrations, Tynker from BYJU’s has teamed up with FIFA to promote kids coding in an all new way."
        txts="When you play a match in BYJU’S Coding Cup, your team runs on code that you write! Can you code a smarter soccer team? You’ll learn a lot more by practicing and playing and of course — scoring! Anyone of any age or skill level can play for free. This is a perfect way for your child to start their love of coding!"/>
    </Container>
  )
}

export default Cup

const Container = styled.div`
    width: 100%;
    height: 490px;
    display: flex;
    justify-content: center;
`