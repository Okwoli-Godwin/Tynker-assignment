import React from 'react'
import styled from 'styled-components'

import GlobalButton from './GlobalButton'


interface Idata{
    img: string
    fd : string
    txt: string
    txts: string
    mid: string
    wid: string
}

const GlobalCards: React.FC<Idata> = ({img, fd, txt, txts, wid, mid}) => {
  return (
    <>
       <Wrapper fd={fd}>
          <Left>
            <Images src={img} />
          </Left>
          <Right wid={wid} >
            <Top>
                <Fifa src={mid} />
            </Top>
            <P>{txt}</P>
            <Pe>{txts}</Pe>
            <GlobalButton />
          </Right>
       </Wrapper>
    </>
  )
}

export default GlobalCards
const Pe = styled.div`
    /* margin-left: 35px; */
    font-size: 17px;
    line-height: 1.6;
    margin-top: 15px;
    color: #25293a;
`
const P = styled.div`
    /* margin-left: 35px; */
    font-size: 17px;
    line-height: 1.6;
    margin-top: 10px;
    color: #25293a;
`

const Fifa = styled.img`
`
const Top = styled.div`
    width: 100%;
    display: flex;
`
const Images = styled.img`
    width: 100%;
    object-fit: cover;
`
const Right = styled.div<{wid: string}>`
    width: ${({ wid }) => (wid ? "45%" : "65%")};
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    padding-top: 30px;
    padding-left: 10px;
`
const Wrapper = styled.div<{fd: string}>`
    width: 87%;
    height: 100%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
`

const Left = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`