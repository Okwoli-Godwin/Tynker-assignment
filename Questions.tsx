import React from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowRight} from "react-icons/md"

const Questions = () => {
  return (
    <Container>
        <Hold>
            <Top>Frequently asked questions</Top>
        <Nav><Icon><MdKeyboardArrowRight /></Icon> Is coding good for kids?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>  How do I start my child coding?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>   What age is best to introduce coding to kids?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>    Which is the best coding for kids program?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>     Why is coding needed?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>      Why should we use Tynker coding for kids?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>       How do I teach my 7 year old code?</Nav>
        <Nav><Icon><MdKeyboardArrowRight /></Icon>        What options are there for coding for teens?</Nav>
        </Hold>
    </Container>
  )
}

export default Questions
const Icon = styled.div`
    font-size: 44px;
    margin-top: 10px;
`
const Hold = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const Nav = styled.h2`
    color: #7e8285;
    font-weight: 600;
    align-items: center;
    display: flex;
    margin: 0;
    font-size: 20px;
    cursor: pointer;
    :hover{
        color: #5DBE5B;
    }
`
const Top = styled.h1`
    color: #25293a;
    margin: 0;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 45px;
    align-items: center;
    padding-bottom: 40px;
`