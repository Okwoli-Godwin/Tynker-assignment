import React from 'react'
import styled from 'styled-components'
import img1 from "./Assets/apple.png"
import img2 from "./Assets/google3.png"
import img3 from "./Assets/microsoft.png"
import img4 from "./Assets/syl.png"
import img5 from "./Assets/pbs.png"
import img6 from "./Assets/bbc.png"
import img7 from "./Assets/fac.png"
import img8 from "./Assets/lego.png"
import img9 from "./Assets/mine.png"
import img10 from "./Assets/mat.png"
import img11 from "./Assets/hot.png"
import img12 from "./Assets/bar.png"

const Trusted = () => {
  return (
    <Container>
        <Top>Trusted by Leading Brands</Top>
        <P>Our methods for learning to code all are provided within a safe, moderated community that is built <br />
         around encouraging students to gain confidence in their abilities and do so without fear of failure.</P>

         <Icons>
            <Img1 src={img1} />
            <Img2 src={img2} />
            <Img3 src={img3} />
            <Img4 src={img4} />
            <Img5 src={img5} />
            <Img6 src={img6} />
         </Icons>
         <Icons2>
            <Img7 src={img7} />
            <Img8 src={img8} />
            <Img9 src={img9} />
            <Img10 src={img10} />
            <Img11 src={img11} />
            <Img12 src={img12} />
         </Icons2>
    </Container>
  )
}

export default Trusted
const Img12 = styled.img`
    height: 130px;
`
const Img11 = styled.img`
    height: 130px;
`
const Img10 = styled.img`
    height: 130px;
`
const Img9 = styled.img`
    height: 130px;
`
const Img8 = styled.img`
    height: 130px;
`
const Img7 = styled.img`
    height: 130px;
`
const Img6 = styled.img`
    height: 130px;
`
const Img5 = styled.img`
    height: 130px;
`
const Img4 = styled.img`
    height: 130px;
`
const Img3 = styled.img`
    height: 125px;
`
const Img2 = styled.img`
    height: 120px;
`
const Img1 = styled.img`
    height: 120px;
`
const Icons = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
`
const Icons2 = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
`
const P = styled.div`
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
`
const Top = styled.h1`
    
`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #EEFAFD;
    padding-top: 70px;
`