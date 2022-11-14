import React from 'react'
import styled from 'styled-components'
import bg from "./Assets/bg.svg"
import GlobalButton from './GlobalButton'
import gbg from "./Assets/bgb.png"
import dot from "./Assets/dots.svg"
import {RiDoubleQuotesL} from "react-icons/ri"
import Gee from "./Assets/gee.png"
import Gee2 from "./Assets/smile.png"
import Gee3 from "./Assets/laugh.png"

const Globe = () => {
  return (
    <Container>
        <Img src={bg} />
        <Img2 src={gbg} />
        <Top>Join Tynker's Global Community</Top>
        <Button>SIGN UP FREE</Button>
        <Card>
            <Circle>
                <Mill>60 <br /> Million</Mill>
                <P>students</P>
            </Circle>
        </Card>
         <Card2>
            <Circle>
                <Mill>Over 7 <br /> Billion</Mill>
                <P>lines of code</P>
            </Circle>
        </Card2>
        <Card3>
            <Circle>
                <Mill>Over 100 <br /> Thousand</Mill>
                <P>schools</P>
            </Circle>
        </Card3>
        <Box>
            <Hold>
                <T><RiDoubleQuotesL />I thought a game was <br /> going to be extremely  <br />
                 hard to make, but <br /> Tynker made it really <br /> easy.</T>
                 <End>
                    <Over>
                        <Ty>Tynker Featured</Ty>
                        <Tm>Maker</Tm>
                    </Over>
                    <Other>
                        <Ge src={Gee} />
                    </Other>
                 </End>
            </Hold>
             <Hold2>
                <T><RiDoubleQuotesL />There's so much <br /> opportunity once they  <br />
                 understand how coding <br /> works. It's amazing to <br /> see them create <br />
                 incredible things <br />themselves.</T>
                 <End>
                    <Over>
                        <Ty>Charlotte R.</Ty>
                        <Tl>Parent | Melbourne,</Tl>
                        <Tu>Australia</Tu>
                    </Over>
                    <Other>
                        <Ge src={Gee2} />
                    </Other>
                 </End>
            </Hold2>
            <Hold>
                <T><RiDoubleQuotesL />I thought a game was <br /> going to be extremely  <br />
                 hard to make, but <br /> Tynker made it really <br /> easy.</T>
                 <End>
                    <Over>
                        <Ty>Valerie S.</Ty>
                        <Tl>5th Grade Teacher |</Tl>
                        <Tu>California, US</Tu>
                        
                    </Over>
                    <Other>
                        <Ge src={Gee3} />
                    </Other>
                 </End>
            </Hold>
        </Box>
    </Container>
  )
}

export default Globe
const Tu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const Tl = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const Tm  = styled.div`
    font-weight: 700;
    color: #0a0a0a;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 50%;
    font-size: 18px;
`
const Ty = styled.div`
    font-weight: 700;
    color: #0a0a0a;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 50%;
    align-items: center;
    font-size: 18px;
`
const Ge = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
`
const Other = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`
const Over = styled.div`
    width: 68%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`
const End = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
    margin-top: 30px;
`
const T = styled.div`
    color: #2f2f2f;
    font-size: 23px;
    font-style: italic;
    margin-top: 40px;
`
const Hold = styled.div`
    width: 360px;
    height: 340px;
    border-radius: 5px;
    background-color: white;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Hold2 = styled.div`
    width: 360px;
    height: 410px;
    border-radius: 5px;
    background-color: white;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Box = styled.div`
    width: 85%;
    height: 450px;
    display: flex;
    position: absolute;
    bottom: 140px;
    justify-content: space-between;
`
const P = styled.div`
    color: white;
`
const Mill = styled.div`
    font-size: 1.625rem;
    font-weight: 700;
    color: #fde867;
    text-align: center;
    margin: 0;
    line-height: 27px;
`
const Circle = styled.div`
    width: 140px;
    height: 140px;
    background-color: #33343B;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Card = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${dot});
    background-position: center;
    top: 170px;
    right: 110px;
    position: absolute;
`
const Card2 = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${dot});
    background-position: center;
    top: 450px;
    left: 90px;
    position: absolute;
`
const Card3 = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${dot});
    background-position: center;
    bottom: 570px;
    right: 280px;
    position: absolute;
`
const Img2 = styled.img`
    position: absolute;
    height: 44%;
    object-fit: contain;
    top: 220px;
`
const Img = styled.img`
    position: absolute;
    margin-top: 290px;
    height: auto;

    object-fit: cover;
`
const Button = styled.div`
    width: 130px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: #F99600;
    color: white;
    font-weight: bold;
    z-index: 4444;
`
const Top = styled.h1`
    
`
const Container = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: #EEFAFD;
    align-items: center;
    height: 195vh;
    position: relative;
    padding-top: 140px;
    padding-bottom: 120px;
    z-index: 536365;
`