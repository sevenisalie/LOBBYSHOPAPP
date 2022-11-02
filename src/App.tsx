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
  justify-content: flex-start;
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
  align-self: center;
  position: relative;
  justify-self: center;
  margin-top: auto;
  margin-bottom: auto;
  
`

const SearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 0px 36px 36px 0px;
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
  height: 100%;
  align-self: center;
  margin-right: 0px;
  margin-left: auto;

  &:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:selected {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  `
const SearchInput = styled.input`
display: flex;
flex-direction: row;
border-radius: 36px 0 0 36px;
height: 64px;
width: 100%;
justify-content: center;
align-content: center;
font-size: 0.8em;
padding: 0.5em;
padding-left: 0.8em;
color: rgba(10, 10, 10, 0.7);
text-align: left;
justify-self: flex-start;
background-color: rgba(255, 255, 255, 0.01);
border: none;

&:hover {
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
}

&:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
}

&:selected {
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
}
&:active {
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
}
`
const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 3em;
  align-self: center;
  margin-bottom: 0.3em;
  margin-left: 0.3em;
`
const HeaderSubText = styled.p`
  font-weight: 400;
  font-size: 1.3em;
  align-self: center;
  margin-top: 0px;

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
const SearchIcon = styled(AiOutlineSearch)`
  font-size: 3em;
  margin: 0 0 0 0;
  color: rgba(10, 10, 10, 0.7);
`

const SearchInputContainer = styled.div`
display: flex;
flex-direction:row;
border-radius: 36px;
align-self: center;
height: 64px;
width: 60%;
border-radius: 36px;
font-size: 2em;
color: #422800;
text-align: center;
font-weight: 600;
background-color: rgba(255, 255, 255, 0.4);
border: 1px solid rgba( 255, 255, 255, 0.38 );
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
    <NavigationBarContainer>
      <NavigationLogo src={'/Capitol.png'} />
      <HeaderText>Lobby Shop</HeaderText>
      <HeaderSubText>by TAG</HeaderSubText>
    </NavigationBarContainer>
    <SearchContainer>
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

const NavigationBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: auto;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  background-color: !none;
  padding: 0.5em 0 0 0.5em;
  text-align: center;
`
const NavigationLogo = styled.img`
  height: 4em;
  width: auto;
`


export default App
