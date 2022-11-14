import React from 'react'
import styled from 'styled-components'
import GlobalCards from './GlobalCards'
import img from "./Assets/girl.png"


const Teens = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>The #1 Coding Program for Kids and <br /> Teens</Top>
                <P1>Tynker powers the creativity of over <span>60 million students</span> and serves <br /> thousands of schools and educators worldwide.</P1>
                <P2>Our interactive story-based learning allows kids and teens to learn the <br />
                 basics with easy block-based coding challenges before seamlessly <br />
                  transitioning to real-world text-based languages like <span>JavaScript</span> and <span>Python</span>.</P2>
                <P3>With 70+ award-winning courses, there’s a learning path for every student, <br />
                 no matter their age or level. We have over 5,000 lessons, backed by <br />
                  hundreds of built-in tutorials, hands-on projects and interactive <br />
                   assessments.</P3>
                   <Button2>EXPLORE CURRICULUM</Button2>
            </Left>
            <Right>
                <Girl src={img} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Teens
const Girl = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const Right = styled.div`
    width: 47%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button2 = styled.div`
    width: 230px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F99600;
    color: #fefefe;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 5px;
    transition: ease-out 2s;
    text-align: center;
    cursor: pointer;
    margin-top: 15px;
`
const P3 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    color: #1a1a1a;
    margin-top: 15px;
`
const P2 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    color: #1a1a1a;
    margin-top: 15px;
    
    span{
        color: black;
        font-weight: 500;
    }
`
const P1 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
    color: #1a1a1a;
    margin-right: 22px;
    margin-top: 15px;
    span{
        color: black;
        font-weight: 500;
    }
`
const Top = styled.h1`
    color: black;
    margin: 0;
`
const Left = styled.div`
    width: 53%;
    height: 100%;
    display: flex;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
`
const Wrapper = styled.div`
    width: 87%;
    height: 100%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
`