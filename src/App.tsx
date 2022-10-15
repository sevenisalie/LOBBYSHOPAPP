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
        <ResultsCard key={index} >

          <ResultsContentContainer>
            <ResultsHeader>Client Details</ResultsHeader>
              <ResultsContentRow>
                <ResultsRowHeader>Name:</ResultsRowHeader>
                <ResultsRowContent>{result.name}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Name:</ResultsRowHeader>
                <ResultsRowContent>{result.state_display}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Name:</ResultsRowHeader>
                <ResultsRowContent>{result.effective_date}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Name:</ResultsRowHeader>
                <ResultsRowContent>{result.general_description}</ResultsRowContent>
              </ResultsContentRow>
          </ResultsContentContainer>

          <ResultsContentContainer>
            <ResultsHeader>Registered Agent</ResultsHeader>
              <ResultsContentRow>
                <ResultsRowHeader>Name:</ResultsRowHeader>
                <ResultsRowContent>{result.registrant.name}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Info:</ResultsRowHeader>
                <ResultsRowContent>{result.registrant.description}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Locale:</ResultsRowHeader>
                <ResultsRowContent>{`${result.registrant.city}, ${result.registrant.state}`}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Contact:</ResultsRowHeader>
                <ResultsRowContent>{result.registrant.contact_name}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Phone:</ResultsRowHeader>
                <ResultsRowContent>{result.registrant.contact_telephone}</ResultsRowContent>
              </ResultsContentRow>
              <ResultsContentRow>
                <ResultsRowHeader>Last Filing:</ResultsRowHeader>
                <ResultsRowContent>{result.registrant.dt_updated}</ResultsRowContent>
              </ResultsContentRow>
          </ResultsContentContainer>

        </ResultsCard>
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
    <h2 style={{alignSelf: "center", fontWeight: "600", fontSize: "5em"}}>LobbyShop</h2>
 
      <SearchInput placeholder='Keyword' onChange={e => handleSearch(e)}></SearchInput>
      <SearchButton onClick={() => fetchQuery()}>Search</SearchButton>

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

export default App

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  padding: 1em;
  margin: 2em;
  gap: 1em;
  align-content: center;
  justify-content: center;
  justify-items: center;
`
const ResultsCard = styled.div`
display: flex;
flex-direction: row;
width: 80%;
height: 100%;
align-self: center;
padding: 0.42em;
backdrop-filter: blur(16px) saturate(194%);
-webkit-backdrop-filter: blur(16px) saturate(194%);
background-color: rgba(255, 255, 255, 0.41);
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.125);
`
const ResultsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: auto;

  
`
const ResultsHeader = styled.h2`
  font-size: 1.4em;
  font-weight: 600;
  color: #3b3b3b;
  text-align: left;
  align-self: flex-start;
`
const ResultsContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  width: 100%;
  height: auto;
`
const ResultsRowHeader = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #3b3b3b;
  text-align: left;
  margin: 0 0 0 0;
`
const ResultsRowContent = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #3b3b3b;
  text-align: left;
  margin: 0 0 0 0;
`