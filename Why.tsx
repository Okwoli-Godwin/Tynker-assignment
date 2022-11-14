import React from 'react'
import styled from 'styled-components'
import bg from "./Assets/top.svg"
import {MdKeyboardArrowRight} from "react-icons/md"

const Why = () => {
  return (
    <Container>
        <Top>Why Should Kids and Teens Learn to Code with <br />
         Tynker?</Top>

         <Hold>
            <P>Because <span>technology is so integrated</span> into virtually every aspect of our lives, learning about it is <span>more
         important than ever</span>. Our coding platform makes it convenient and fun for kids and teens to gain 
         knowledge that will serve them well throughout their lives. You can count on our <span>trusted methods</span> to 
         help them develop and grow their capabilities with computers.</P>

         <P2>Tynker isn’t just for schools and coding camps, though. Parents who value <span>STEM education</span> and want 
        their children to know how to code should know that our kids programming platform can be used at 
        home, too. Tynker offers a range of solutions with icon-coding for pre-readers, block-based coding, and 
        advanced courses in Python, JavaScript, data science, art, and image processing. There are individual 
        and family home plans, and our online coding classes for all ages are an excellent way for them to gain 
        the supplemental STEM skills needed for their future.</P2>
         </Hold>

         <Card>
            <Holder>
                <Ben>CODING BENEFITS</Ben>
                <Nav><MdKeyboardArrowRight />Top 10 Reasons to Code</Nav>
                <Nav2><MdKeyboardArrowRight />Kids Coding Basics</Nav2>
                <Nav2><MdKeyboardArrowRight />Develop 21st Century Skill</Nav2>
                <Nav2><MdKeyboardArrowRight />Download eBooks on Coding</Nav2>
            </Holder>
            <Holder>
                <Ben>CODING GUIDES</Ben>
                <Nav><MdKeyboardArrowRight />What is Coding for Kids</Nav>
                <Nav2><MdKeyboardArrowRight />Coding with Minecraft</Nav2>
                <Nav2><MdKeyboardArrowRight />Coding with Eletronic Kits</Nav2>
                <Nav2><MdKeyboardArrowRight />Coding with Connected Toys</Nav2>
                <Nav2><MdKeyboardArrowRight />More Coding resources</Nav2>
            </Holder>
            <Holder>
                <Ben>TYNKER HIGHLIGHTS</Ben>
                <Nav><MdKeyboardArrowRight />What's New in Tynker</Nav>
                <Nav2><MdKeyboardArrowRight />COVID-19 Impact report</Nav2>
                <Nav2><MdKeyboardArrowRight />Meet our Featured Makers</Nav2>
                <Nav2><MdKeyboardArrowRight />Sensational coding projects</Nav2>
                <Nav2><MdKeyboardArrowRight />Celebrating Women in STEM</Nav2>
            </Holder>
            <Holder>
                <Ben>CODING IN SCHOOLS</Ben>
                <Nav><MdKeyboardArrowRight />K-12 School Plans</Nav>
                <Nav2><MdKeyboardArrowRight />AP Computer Science Principles</Nav2>
                <Nav2><MdKeyboardArrowRight />AP Computer Science A</Nav2>
                <Nav2><MdKeyboardArrowRight />Remote Learning</Nav2>
                <Nav2><MdKeyboardArrowRight />K-12 Success Stories</Nav2>
            </Holder>
         </Card>
    </Container>
  )
}

export default Why
const Nav2 = styled.div`
    font-size: .75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-top: 15px;
`
const Nav = styled.div`
    font-size: .75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-top: 15px;
`
const Ben = styled.h3`
    color: #0096aa;
    margin: 0;
    margin-top: 10px;
`
const Holder = styled.div`
    width: 230px;
    padding-left: 40px;
    height: 250px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-bottom: 10px;

`
const Card = styled.div`
    width: 87%;
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
`
const Hold = styled.div`
    width: 820px;
    display: flex;
    flex-direction: column;
`
const P2 = styled.div`
    font-size: 18px;
    color: #25293a;
    line-height: 1.6;
    margin-top: 20px;
    span{
        font-weight: 700;
        color: #25293a;
    }
`
const P = styled.div`
    font-size: 18px;
    color: #25293a;
    line-height: 1.6;
    span{
        font-weight: 700;
        color: #25293a;
    }
`

const Top = styled.h1`
    text-align: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 140px;
    flex-direction: column;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-color: #EBFBFE;
    background-size: contain;
    padding-bottom: 30px;
    justify-content: space-between;
`