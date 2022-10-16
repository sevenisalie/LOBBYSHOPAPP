import React, {useEffect, useState} from "react"
import styled from "styled-components"


const ResultsCard = styled.div`
display: flex;
flex-direction: row;
width: 80%;
height: 100%;
align-self: center;
padding: 1.42em;
backdrop-filter: blur(16px) saturate(194%);
-webkit-backdrop-filter: blur(16px) saturate(194%);
background-color: rgba(255, 255, 255, 0.41);
border-radius: 12px;
@media (max-width: 568px) {
    flex-direction: column;
    width: 95%;
}
`
const ResultsContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  width: 100%;
  height: 100%;

  
`
const ResultsHeader = styled.h2`
  grid-area: 1 / 1 / 2 / 4;
  font-size: 1.4em;
  font-weight: 600;
  color: #3b3b3b;
  text-align: left;
  align-self: flex-start;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 6 / 6;
    width: 100%;
    height: 100%;
`
const ResultsContentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
  height: 100%;
`
const ResultsRowHeader = styled.div`
  font-size: 0.8em;
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
const formatDate = (dateString:any) => {
    const options = { year: "numeric", month: "long", day: "numeric" } as const
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

const Result = (props:any) => {
    return (
        <>
<ResultsCard key={props.index} >

<ResultsContentContainer>
  <ResultsHeader>Client Details</ResultsHeader>

  <ContentContainer>
    <ResultsContentRow>
      <ResultsRowHeader>Name:</ResultsRowHeader>
      <ResultsRowContent>{props.result.name}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>State:</ResultsRowHeader>
      <ResultsRowContent>{props.result.state_display}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Date:</ResultsRowHeader>
      <ResultsRowContent>{formatDate(props.result.effective_date)}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Description:</ResultsRowHeader>
      <ResultsRowContent>{props.result.general_description}</ResultsRowContent>
    </ResultsContentRow>
    </ContentContainer>
</ResultsContentContainer>

<ResultsContentContainer>
  <ResultsHeader>Registered Agent</ResultsHeader>
  <ContentContainer>
    <ResultsContentRow>
      <ResultsRowHeader>Name:</ResultsRowHeader>
      <ResultsRowContent>{props.result.registrant.name}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Info:</ResultsRowHeader>
      <ResultsRowContent>{props.result.registrant.description}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Locale:</ResultsRowHeader>
      <ResultsRowContent>{`${props.result.registrant.city}, ${props.result.registrant.state}`}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Contact:</ResultsRowHeader>
      <ResultsRowContent>{props.result.registrant.contact_name}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Phone:</ResultsRowHeader>
      <ResultsRowContent>{props.result.registrant.contact_telephone}</ResultsRowContent>
    </ResultsContentRow>
    <ResultsContentRow>
      <ResultsRowHeader>Last Filing:</ResultsRowHeader>
      <ResultsRowContent>{formatDate(props.result.registrant.dt_updated)}</ResultsRowContent>
    </ResultsContentRow>
    </ContentContainer>
</ResultsContentContainer>

</ResultsCard>
        </>
    )
}

export default Result
