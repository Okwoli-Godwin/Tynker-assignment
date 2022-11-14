import React from 'react'
import styled from 'styled-components'
import GlobalButton from './GlobalButton'
import image from "./Assets/fun.png"
import tee from "./Assets/T1.png"
import tee2 from "./Assets/T.png"
import tee3 from "./Assets/mod.png"
import {AiFillStar} from "react-icons/ai"
import {BsStarHalf, BsFillStarFill, BsStar} from "react-icons/bs"

const Rated = () => {
  return (
    <Container>
        <Top>3 Highly-Rated Mobile Apps for Learning Code</Top>
        <P>Download Tynker apps and learn to code on the go.</P>
        <GlobalButton />
        <Wrapper>
            <Left>
                <Fun src={image} />
            </Left>
            <Rhi>
                <Logo>
                    <Side>
                        <Log src={tee} />
                    </Side>
                    <Wide>
                        <Bold>Tynker Junior</Bold>
                        <Parv>Tap-Tap picture coding with voice-overs. Pre- <br />
                         readers solve story-based puzzles and build their <br />
                         first programs in coding sandboxes. Ages 5-7</Parv>
                         <Hold>
                            <Icons>
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill/>
                                <BsFillStarFill />
                                <BsStarHalf />
                            </Icons>
                            <Num>4.5</Num>
                            <Calc>2,200+ reviews</Calc>
                         </Hold>
                    </Wide>
                </Logo>
                <Logo2>
                    <Side>
                        <Log src={tee2} />
                    </Side>
                    <Wide>
                        <Bold>Tynker</Bold>
                        <Parv>Drag-and-drop block coding with a full-featured<br />
                         workshop. Build games and apps, compose music <br />
                         and art, control smart devices, and much, much <br />
                         more. Ages 7-12</Parv>
                         <Hold>
                            <Icons>
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill/>
                                <BsFillStarFill />
                                <BsStarHalf />
                            </Icons>
                            <Num>4.7</Num>
                            <Calc>10,400+ reviews</Calc>
                         </Hold>
                    </Wide>
                </Logo2>
                <Logo3>
                    <Side>
                        <Log src={tee3} />
                    </Side>
                    <Wide>
                        <Bold>Mod Creator</Bold>
                        <Parv>Drag-and-drop Minecraft modding. Design skins,<br />
                         blocks and items. Modify mob behaviors. Create <br />
                         mods and add ons. Explore worlds! Ages 7-12</Parv>
                         <Hold>
                            <Icons>
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill/>
                                <BsFillStarFill />
                                <BsStar />
                            </Icons>
                            <Num>4.0</Num>
                            <Calc>3,300+ reviews</Calc>
                         </Hold>
                    </Wide>
                </Logo3>
            </Rhi>
        </Wrapper>
    </Container>
  )
}

export default Rated
const Calc = styled.div`
    display: flex;
    align-items: center;
`
const Num = styled.div`
    display: flex;
    align-items: center;
`
const Icons = styled.div`
    width: 88px;
    height: 100%;
    color: #F0CA00;
    font-size: 14px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const Hold = styled.div`
    width: 265px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const Wide = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    
`
const Log = styled.img``
const Side = styled.div`
    width: 75px;
    height: 100%;
`
const Logo = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    
`
const Logo2 = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    margin-top: 15px;
`
const Logo3 = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    margin-top: 30px;
`
const Rhi = styled.div`
    width: 40%;
    height: 480px;
    display: flex;
    flex-direction: column;
    
`
const Lv = styled.div`
    width: 130px;
    height: 70px;
    background-color: pink;
`
const Car = styled.div`
    width: 40px;
    height: 40px;
`
const Parv= styled.div`
    margin-top: 5px;
`
const Bold = styled.h2`
    font-weight: 500;
    margin-left: 50px;
    margin: 0;
`
const L = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    background-color: violet;
    height: 170px;
`
const Tee = styled.img`
    
`
const R = styled.div`
    width: 30px;
    height: 70px;
    display: flex;
    height: 170px;
    background-color: indigo;
`
const First = styled.div`
    width: 100%;
    background-color: blue;
    display: flex;
    align-items: center;

`
const Right = styled.div`
    width: 290px;
    height: 490px;
    display: flex;
    flex-direction: column;
    background-color: yellow;
`
const Fun = styled.img`
    width: 95%;
    height: 95%;
    object-fit: cover;
`
const Left = styled.div`
    width: 60%;
    height: 480px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`
const Wrapper = styled.div`
    width: 87%;
    margin-top: 50px;
    display: flex;
`
const P = styled.div`
    font-size: 18px;
    line-height: 1.6;
`
const Top = styled.h1`
    font-family: Montserrat,Open Sans,Helvetica,Arial,sans-serif;
    line-height: 1.3;
    font-weight: 600;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
`