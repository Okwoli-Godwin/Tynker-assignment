import React from 'react'
import styled from 'styled-components'
import image from "./Assets/safe.png"

const Footer = () => {
  return (
    <Container>
        <Top>
            <First>
                <Ab>ABOUT</Ab>
                <Ap>Tynker is the world’s leading K-12 creative coding platform, enabling students of all 
                    ages to learn to code at home, school, and on the go. Tynker’s highly successful coding 
                    curriculum has been used by one in three U.S.
                     K-8 schools, 100,000 schools globally, and over 60 million kids across 150 countries.</Ap>
            </First>
            <Sec>
                <Ab>RESOURCES</Ab>
                <Navs1>Blog</Navs1>
                <Navs2>About Us</Navs2>
                <Navs3>Press</Navs3>
                <Navs4>Jobs</Navs4>
                <Navs5>Mobile Apps</Navs5>
                <Navs6>Coding eBooks</Navs6>
                <Navs7>Forum</Navs7>
                <Navs8>Store</Navs8>
                <Navs9>CS Authors</Navs9>
            </Sec>
            <Th>
                <Ab>PARENTS</Ab>
                <Navs1>Overview</Navs1>
                <Navs2>Curriculum</Navs2>
                <Navs3>Live Classes</Navs3>
                <Navs4>Give a Gift</Navs4>
                <Navs5>Redeem</Navs5>
                <Navs6>Why Coding</Navs6>
                <Navs7>Featured Makers</Navs7>
                
            </Th>
            <Ft>
                <Ab>EDUCATORS</Ab>
                <Navs1>Overview</Navs1>
                <Navs2>Elementary</Navs2>
                <Navs3>Middle School</Navs3>
                <Navs4>High School</Navs4>
                <Navs5>AP CS Courses</Navs5>
                <Navs6>PD</Navs6>
                <Navs7>Hour of Code</Navs7>
                <Navs8>STEM Projects</Navs8>
                <Navs9>Request a Quote</Navs9>
            </Ft>
            <Fif>
                <Ab>PARENT NEWSLETTER</Ab>
                <Hold>
                    <Input placeholder='Enter Your Email'/>
                    <Ok>OK</Ok>
                </Hold>
            </Fif>
        </Top>
        <Da></Da>
        <Down>
            <Safe src={image} />
            <Fu>© 2022 Neuron Fuel</Fu>
            <Con>Terms & Conditions</Con>
            <Pri>PRIVACY POLICY</Pri>
            <Saf>Kids & Online Safety</Saf>
            <Au>About Us</Au>
            <Cu>Contact Us</Cu>
        </Down>
    </Container>
  )
}

export default Footer
const Cu = styled.div`
    font-size: 12px;
    margin-left: 15px;
`
const Au = styled.div`
    font-size: 12px;
    margin-left: 15px;
`
const Saf = styled.div`
    font-size: 12px;
    margin-left: 15px;
`
const Pri = styled.div`
    font-size: 13px;
    margin-left: 15px;
    color: white;
`
const Con = styled.div`
    font-size: 12px;
    margin-left: 15px;
`
const Fu = styled.div`
    font-size: 12px;
    margin-left: 15px;
`
const Safe = styled.img``
const Down = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: #999;
`
const Da = styled.div`
    width: 85%;
    height: 1px;
    background-color: lightgray;
`
const Ok = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #0096AA;
    cursor: pointer;
`
const Input = styled.input`
    background-color: black;
    border: 1px solid white;
    padding-left: 10px;
    font-weight: 15px;
    color: white;
`
const Hold = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 10px;
`
const Fif = styled.div`
    width: 270px;
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #999;
    margin-left: 30px;
`
const Ft = styled.div`
    width: 170px;
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #999;
    margin-left: 30px;
`
const Th = styled.div`
    width: 170px;
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #999;
    margin-left: 30px;
`
const Navs9 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs8 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs7 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs6 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs5 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs4 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs3 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs2 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 3px;
    cursor: pointer;
`
const Navs1 = styled.div`
    /* margin-bottom: 2px; */
    margin-top: 15px;
    cursor: pointer;
    :hover{
        border-bottom: 1px solid gray;
        width: 40px;
    }
`
const Sec = styled.div`
    width: 170px;
    height: 250px;
    display: flex;
    flex-direction: column;
    color: #999;
    margin-left: 30px;
`
const Ap = styled.div`
    font-size: 16px;
    color: #999;
    margin-top: 15px;
`
const Ab = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #999999;
`
const First = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    width: 85%;
    display: flex;

`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #293037;
    align-items: center;
    padding-top: 15px;
`