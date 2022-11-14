import React from 'react'
import styled from 'styled-components'
import image from "./Assets/top.svg"
import down from "./Assets/bottom.svg"
import guys from "./Assets/boys.png"
import lady from "./Assets/woman.png"
import GlobalButton from './GlobalButton'

const Parents = () => {
  return (
    <Container>
        <Wrapper fd="hgfj">
            <Left>
                <Boys src={guys} />
            </Left>
            <Right>
                <Top>Parents</Top>
                <P1>Coding plays a pivotal role in our daily lives from cars and coffee <br />
                 makers to life-changing advancements in medicine, environmental <br />
                 conservation, space exploration, and much more.</P1>
                 <P2>At Tynker, we teach kids and teens to code through both our <span>self- <br />
                  paced, game-like courses</span> and our <span>teacher-led private online classes.</span> <br />
                  With Tynker, there’s a <span>path to coding certification</span> for all ages and skill <br />
                  levels that will advance them to <span>real-world Python</span>, <span>Web Dev</span>,<span> Data <br />
                  Science</span> and more!</P2>
                  <P3>Select the option that’s best for your child!</P3>
                  <GlobalButton />
            </Right>
        </Wrapper>
        <Wrapper fd="">
            <Left>
                <Boys src={lady} />
            </Left>
            <Right>
                <Top>Educators</Top>
                <P1>Join over 100,000 schools that use Tynker to engage students with <br />
                 coding and connect with other educators who love to code!</P1>

                 <P2>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can <br />
                  <span>create a free account</span>, set up your virtual classroom, and assign ready- <br />
                   made lesson plans!</P2>

                  <P3>Tynker empowers K-12 educators with free PD, standards-aligned <br />
                   curricula, cross-curricular STEM coding, AP Computer Science courses, <br />
                   and many great coding resources.</P3>
                  <Card><GlobalButton /></Card>
            </Right>
        </Wrapper>
        <Down>
            <Imo src={down} />
        </Down>
    </Container>
  )
}

export default Parents
const Card = styled.div`
    width: 100%;
    display: flex;
    /* justify-content: center; */
`
const Imo = styled.img`
    z-index: 6566;
    margin-bottom: -10px;
`
const Down = styled.div`
    margin-top: -28px;
`
const P3 = styled.div`
    font-size: 18px;
    color: #25293a;
    margin-top: 15px;
`
const P2 = styled.div`
    font-size: 18px;
    color: #25293a;
    margin-top: 15px;
    span{
        color: #00bcd4;
        font-weight: 500;
        cursor: pointer;
    }
`
const P1 = styled.div`
    font-size: 18px;
    color: #25293a;
`
const Top = styled.h2`
    font-family: Montserrat,Open Sans,Helvetica,Arial,sans-serif;
    line-height: 1.3;
    font-size: 1.875rem;
    font-weight: 600;
    margin-top: 60px;
`
const Right = styled.div`
    width: 49%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Boys = styled.img`
    margin-left: 20px;
`
const Left = styled.div`
    width: 49%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div<{fd: string}>`
    width: 87%;
    display: flex;
    /* margin-top: 140px; */
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 140px;
    align-items: center;
    flex-direction: column;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-color: #EBFCFF;
    overflow: hidden;
`