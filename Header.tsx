import React, {useState} from 'react'
import styled from 'styled-components'
import image from "./Assets/backdrop.png"
import image2 from "./Assets/wave.svg"
import image3 from "./Assets/Tynker.png"
import {GiGamepad} from "react-icons/gi"
import {BsGift} from "react-icons/bs"
import Globaltext from './Globaltext'
import hero from "./Assets/hero.png"
import vid from "./Assets/video.svg"
import Thin from "./Assets/think.png"
import {IoMdCheckmarkCircle, IoLogoApple, IoLogoFacebook} from "react-icons/io"
import {FaGoogle} from "react-icons/fa"
import {CgMicrosoft} from "react-icons/cg"

const Header = () => {
    const [show2, setShow2] = useState<boolean>(false);
    const [show3, setShow3] = useState<boolean>(false)
    const [show, setShow] = React.useState(false);

    const toggleShow2 = () => {
		setShow2(!show2);
	};
    const toggleShow3 = () => {
		setShow3(show3);
	};

	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeHeaderColor);

   const [isHovering, setIsHovering] = useState(false);
    const [Hovering, setHovering] = useState(false);
    const [HoveringIn, setHoveringIn] = useState(false);
    const [MyHoveringIn, setMyHoveringIn] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const MouseOver = () => {
    setHovering(true);
  };

  const MouseOut = () => {
    setHovering(false);
  };
  const MouseOverIn = () => {
    setHoveringIn(true);
  };

  const MouseOutIn = () => {
    setHoveringIn(false);
  };
  const MyMouseOverIn = () => {
    setMyHoveringIn(true);
  };

  const MyMouseOutIn = () => {
    setMyHoveringIn(false);
  };

  return (

    <Container>
        {show ? (
            <Head bg='white' cl='black' >
            <Wrap>
                <Left>
                <Images src={Thin} />
            </Left>
            <Mid>
                <Nav onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Icons><GiGamepad /></Icons>
                     PLAY
                </Nav>
                <Nav onMouseOver={MouseOver} onMouseOut={MouseOut}>
                    PARENTS
                </Nav>
                <Nav onMouseOver={MouseOverIn} onMouseOut={MouseOutIn}>
                     EDUCATORS
                </Nav>
                <Nav onMouseOver={MyMouseOverIn} onMouseOut={MyMouseOutIn}>
                     WHY CODE?
                </Nav>
                <Nav>
                    <Icons1><BsGift /></Icons1>
                     GIFT
                </Nav>
            </Mid>
            <Right>
                <Button onClick={toggleShow2}>START FOR FREE</Button>
                <Log>LOG IN</Log>
            </Right>
            </Wrap>
        </Head>
        ) : (
            <Head bg='' cl='white' >
            <Wrap>
                <Left>
                <Images src={image3} />
            </Left>
            <Mid>
                <Nav onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Icons><GiGamepad /></Icons>
                     PLAY
                </Nav>
                <Nav onMouseOver={MouseOver} onMouseOut={MouseOut}>
                    PARENTS
                </Nav>
                <Nav onMouseOver={MouseOverIn} onMouseOut={MouseOutIn}>
                     EDUCATORS
                </Nav>
                <Nav onMouseOver={MyMouseOverIn} onMouseOut={MyMouseOutIn}>
                     WHY CODE?
                </Nav>
                <Nav>
                    <Icons1><BsGift /></Icons1>
                     GIFT
                </Nav>
            </Mid>
            <Right>
                <Button onClick={toggleShow2}>START FOR FREE</Button>
                <Log>LOG IN</Log>
            </Right>
            </Wrap>
        </Head>
        )}
        
        {isHovering && (<Card><Globaltext txt="BYJU'S Coding Cup" tet="Coding Games"tot="Minecraft"twt="Hour of Code"/></Card>)}
        {Hovering && (<Card2><Globaltext txt="Overview" tet="Curriculum"tot="Get Started for Free"twt="Hour of Code"/></Card2>)}
        {HoveringIn && (<Card3><Globaltext txt="Overview" tet="School Curriculum"tot="Request a Quote"twt="Request a PD"/></Card3>)}
        {MyHoveringIn && (<Card4><Globaltext txt="What is Coding?" tet="Whing Coding Matters"tot="Coding eBooks"twt="Mobile Apps"/></Card4>)}
        <Img src={image2} />
        <Wrapper>
            <L>
                <Top>Coding For Kids and <br /> Teens Made Easy</Top>
                <P>The fun way to learn programming and develop <br />
                 problem-solving & critical thinking skills!</P>
                 <Button2>GET STARTED FOR FREE</Button2>
            </L>
            <R>
                <Hero src={hero} />
                <Video src={vid} />
            </R>
        </Wrapper>
        {show2 ? (
            
            <Hol>
                <Ft>
                    <Str>Start your child's <br /> coding journey.</Str>
                    <Wy>Why should kids learn to code?</Wy>
                    <Learb>Learning to code is fun and opens up a world of <br /> creativity. Coding helps kids:</Learb>
                    <Confi><IoMdCheckmarkCircle />  Gain confidence</Confi>
                    <Confi2><IoMdCheckmarkCircle />  Build problem solving skills</Confi2>
                    <Confi2><IoMdCheckmarkCircle />  Communicate better</Confi2>
                    <Confi2><IoMdCheckmarkCircle />  Improve academic performance</Confi2>
                </Ft>
                <Rit>
                    <Join>Join Tynker <br /> for <span>FREE</span>!</Join>
                    <Sign>Your child can join the 60 million kids learning to <br />
                     code! No credit card required for sign up.</Sign>
                     <G>GOOGLE
                        <Go><FaGoogle /></Go>
                     </G>
                     <M>MICROSOFT
                        <Go><CgMicrosoft /></Go>
                     </M>
                     <A>APPLE
                        <Go><IoLogoApple /></Go>
                     </A>
                     <F>FACEBOOK
                        <Go><IoLogoFacebook /></Go>
                     </F>
                     
                </Rit>
            </Hol>
        ) : null }
        <Ques></Ques>
    </Container>
  )
}

export default Header
const Ques = styled.div`
    width: 200px;
    height: 45px;
    background-color: blue;
`
const Go = styled.div`
    position: absolute;
    color: white;
    left: 10px;
`
const F = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(66, 103, 178);
    font-weight: 600;
    color: white;
    align-items: center;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    margin-top: 30px;
`
const A = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(85, 85, 85);
    font-weight: 600;
    color: white;
    align-items: center;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    margin-top: 30px;
`
const M = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(0, 164, 239);
    font-weight: 600;
    color: white;
    align-items: center;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    margin-top: 30px;
`
const G = styled.div`
    width: 350px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(219, 68, 55);
    font-weight: 600;
    color: white;
    align-items: center;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    margin-top: 30px;
    
`
const Sign = styled.div`
    text-align: center;
    font-size: 17px;
    color: rgb(46, 51, 71);
    font-weight: 400;
`
const Join = styled.h1`
    text-align: center;
    color: rgb(55, 103, 197) !important;
    font-size: 45px;
    span{
        color: rgb(237, 111, 80);
    }
`
const Icon = styled.div`
    height: 40px;
    width: 40px;
    z-index: 344;
    font-size: 40px;
    left: 440px;
    top: 1px;
    position: absolute;
    cursor: pointer;
`
const Rit = styled.div`
    width: 50%;
    height: 100%;
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
`
const Confi2 = styled.div`
    font-size: 19px;
    font-weight: 400;
    color: white;
    align-items: center;
    margin-left: 40px;
    margin-top: 20px;
`
const Confi = styled.div`
    font-size: 19px;
    font-weight: 400;
    color: white;
    align-items: center;
    margin-left: 40px;
    margin-top: 50px;
`
const Learb = styled.div`
    color: rgb(248, 248, 248);
    font-weight: 400;
    line-height: 1.5;
    font-size: 17px;
    margin-left: 40px;
`
const Wy = styled.h6`
    font-size: 21.5px;
    font-weight: 600;
    color: white;
    margin-left: 40px;

`
const Str = styled.h1`
    color: white;
    font-size: 40px;
    margin-bottom: -10px;
    margin-left: 40px;
    margin-top: 40px;
`
const Ft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(${image});
`
const Hol = styled.div`
    width: 70%;
    height: 95%;
    background-color: white;
    display: flex;
    position: absolute;
    z-index: 345667788;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    top: 90px;
`
const Route = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 345677;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const Wrap = styled.div`
    width: 87%;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    display: flex;
`
const Video = styled.img`
    position: absolute;
    top: 270px;
    left: 320px;
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
    margin-left: 59px;
    font-weight: 600;
    border-radius: 5px;
    transition: ease-out 2s;
    text-align: center;
    cursor: pointer;
`
const P = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 1.75rem;
    font-family: Open Sans,Helvetica,Arial,sans-serif;
    line-height: 1.6;
    color: white;
    margin-left: 59px;
    margin-top: 30px;
`
const Top = styled.div`
    font-family: Montserrat,Open Sans,Helvetica,Arial,sans-serif;
    font-size: 2.875rem;
    font-weight: 600;
    color: white;
    line-height: 1.3;
    margin-left: 55px;
    margin-top: 50px;
`
const Hero = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 59px;
`
const R = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const L = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    width: 95%;
    height: 545px;
    margin-top: 110px;
`
const Card4 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 717px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Card3 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 580px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Card2 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 458px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`

const Card = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 340px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Log = styled.div`
    width: 75px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
    transition: all 350ms;
    :hover{
        background-color: #82CA6D;
        color: white;
        border: none
    }
`
const Button = styled.div`
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 350ms;
    :hover{
        background-color: #82CA6D;
        color: white;
        border: none;
    }
`
const Right = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
`
const Icons1 = styled.div`
    margin-top: 5px;
    margin-right: 5px;
`
const Icons = styled.div`
    font-size: 34px;
    margin-top: 7px;
    margin-right: 5px;
`
const Nav = styled.h3`
    display: flex;
    font-weight: 600;
    font-size: 16px;
    height: 35px;
    margin: 0;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    transition: all 350ms;
    :hover{
        border: 1px solid white;
        background-color: #bdd1ee;
    }
`
const Mid = styled.div`
    width: 560px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Images = styled.img`
    height: 25px;
    align-items: center;
    margin-top: -7px;
`
const Left = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    height: 100%;
`
const Head = styled.div<{ bg: string; cl: string;}>`
    width: 100%;
    height: 70px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.cl};
    z-index: 191893536536;
	transition: all 350ms;
`
const Img = styled.img`
    position: absolute;
    top: 569px;
    z-index: 5654;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    background-image: url(${image});
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`