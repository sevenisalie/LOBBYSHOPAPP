import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import reactLogo from './assets/react.svg'
import axios from "axios"

import Result from "./Result"
import { AiOutlineSearch } from "react-icons/ai"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 0 0 0;
  padding: 0.2em 0 0.3em 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background: url(backgroundmesh.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-self:center;
  position: relative;
  justify-self: center;
`

const SearchButton = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  align-items: center; 
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: min-content;
  height: min-content;
  align-self: center;

  margin-left: auto;
  margin-right: 0.8em;
  &:hover {
    background-color: #fff;

  }
  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  `
const SearchInput = styled.input`
display: flex;
flex-direction:row;
border-radius: 36px 0 0 36px;
background-color: white;
height: 64px;
width: 100%;
justify-content: center;
align-content: center;
font-size: 1.2em;
color: #422800;
text-align: center;
justify-self: flex-start;
background-color: #fbeee0;
border: none;

&:focus {
  outline: none;
}
&:active {
  outline: none;
}
`

function App() {
  const [count, setCount] = useState(0)
  const [query,setQuery] = useState("")
  const [results, setResults] = useState([])

  const fetchQuery = async () => {
    if (query !== "") {
      const response = await axios.get(
        `https://lobbyapi.onrender.com/clients/search`,
        {
          params: {
            query: `${query}`
          }
        }
      )
      console.log(response)
      setResults(response.data.data)
    }
  }

  
  const handleSearch = (event:any) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  const listResults = results.map((result:any, index:any) => {
    return (
      <>
      <Result result={result} key={index} />
      </>
    )
  })

  
  const testresults = results.map( (result, index) => {
    return (
      <>
        <pre>
          {JSON.stringify(result, null, 2)}
          
        </pre>
      </>
    )
  }) 

  return (
   <>
   <PageContainer>

    <SearchContainer>
    <HeaderText>LobbyShop</HeaderText>
    <HeaderSubText>An App For Finding Companies on Capitol Hill</HeaderSubText>
      <SearchInputContainer>
      <SearchInput  onChange={e => handleSearch(e)}></SearchInput>
      <SearchButton onClick={() => fetchQuery()}>
        <SearchIcon />
      </SearchButton>
      </SearchInputContainer>



    </SearchContainer>

      <ResultsContainer>
        {
          results.length > 0 &&
          listResults
        }
      </ResultsContainer>
    </PageContainer>
   </>
  )
}

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 3em;
  margin: 0 0 0 0;
`

const SearchInputContainer = styled.div`
display: flex;
flex-direction:row;
border-radius: 36px;
background-color: white;
align-self: center;
height: 64px;
width: 60%;
border-radius: 36px;
font-size: 2em;
color: #422800;
text-align: center;
font-weight: 600;
background-color: #fbeee0;
box-shadow: #422800 4px 4px 0 0;
`

export default App
const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 3em;
  align-self: center;
  margin-top: 3em;
  margin-bottom: 0.3em;
`
const HeaderSubText = styled.p`
  font-weight: 600;
  font-size: 1em;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 3em;
`
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 2em;
  gap: 1em;
  align-content: center;
  justify-content: center;
  justify-items: center;
`
