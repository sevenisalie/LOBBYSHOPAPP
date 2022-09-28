import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import reactLogo from './assets/react.svg'
import axios from "axios"
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  border: 3px solid blue;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-self:center;
  position: relative;
  justify-self: center;
  margin-top: -3em;
`

const SearchButton = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: min-content;
  align-self: center;
  margin-top: 2em;

  &:hover {
    background-color: #fff;

  }
  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
  `
const SearchInput = styled.input`
display: flex;
flex-direction:row;
border-radius: 36px;
background-color: white;
align-self: center;
height: 64px;
width: 60%;
border-radius: 36px;
justify-content: center;
align-content: center;
font-size: 2em;
color: #422800;
text-align: center;
font-weight: 600;
background-color: #fbeee0;
box-shadow: #422800 4px 4px 0 0;
&:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem ;
  }
`

function App() {
  const [count, setCount] = useState(0)
  const [query,setQuery] = useState("")
  const [results, setResults] = useState("")

  const fetchQuery = async () => {
    const response = await axios.get(
      `http://localhost:8042/clients`,
    )
    console.log(response)
  }
  useEffect(() => {
    
  }, [])
  
  const handleSearch = (event:any) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  return (
   <>
   <PageContainer>
    <SearchContainer>
    <h2 style={{alignSelf: "center", fontWeight: "600", fontSize: "5em"}}>LobbyShop</h2>
 
      <SearchInput placeholder='Keyword' onChange={e => handleSearch(e)}></SearchInput>
      <SearchButton onClick={() => fetchQuery()}>Search</SearchButton>

      </SearchContainer>
    </PageContainer>
   </>
  )
}

export default App
