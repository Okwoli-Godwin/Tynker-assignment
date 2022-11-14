import React from 'react'
import styled from 'styled-components'

const GlobalButton = () => {
  return (
    <>
        <Button>LEARN MORE</Button>
    </>
  )
}

export default GlobalButton

const Button = styled.div`
    width: 120px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: #F99600;
    color: white;
    margin-top: 20px;
`