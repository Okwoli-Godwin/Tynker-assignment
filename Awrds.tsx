import React from 'react'
import styled from 'styled-components'
import img1 from "./Assets/awr1.png"
import img2 from "./Assets/awr2.png"
import img3 from "./Assets/awr3.png"
import img4 from "./Assets/awr4.png"
import img5 from "./Assets/awr5.png"
import img6 from "./Assets/awr6.png"
import img7 from "./Assets/awr7.png"
import img8 from "./Assets/awr8.png"
import img9 from "./Assets/awr9.png"

const Awrds = () => {
  return (
    <Container>
        <Wrapper>
            <Img1 src={img1} />
            <Img2 src={img2} />
            <Img3 src={img3} />
            <Img4 src={img4} />
            <Img5 src={img5} />
            <Img6 src={img6} />
            <Img7 src={img7} />
            <Img8 src={img8} />
            <Img9 src={img9} />
        </Wrapper>
    </Container>
  )
}

export default Awrds
const Img9 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img8 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img7 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img6 = styled.img`
    height: 60px;
    border-bottom: 1px solid dotted black;
`
const Img5 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img4 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img3 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img1 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Img2 = styled.img`
    height: 90px;
    border-bottom: 1px solid dotted black;
`
const Wrapper = styled.div`
    width: 83%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
`
const Container = styled.div`
    width: 100%;
    justify-content: center;
    height: 160px;
    display: flex;
    background-color: #E2FAFD;
    margin-top: -20px;
    padding-bottom: 20px;
`