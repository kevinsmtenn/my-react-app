import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const Section = props => (
    <div>
        <SectionGroup image={props.image}>
            <WaveTop><Wave /></WaveTop>
            <WaveBottom><Wave /></WaveBottom>
            <SectionLogo src={props.logo} />
            <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
            </SectionTitleGroup>
        </SectionGroup>
    </div>
)

export default Section

const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
`

const SectionLogo = styled.img`
    max-width: 120px;
    margin: 0 auto;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px
    grid-template-columns: 300px auto;
    grid-template-rows: auto 300px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin:0 ;
    line-height: 1.2;

    @media (max-width: 640px) {
        font-size: 40px;
    }

`

const SectionText = styled.p`
    color: white;
    font-size: 20px;
`

const WaveTop = styled.div`
	position: absolute;
	width: 100%;
	top: -6px;
	transform: rotate(180deg);
`

const WaveBottom = styled.div`
	position: absolute;
	width: 100%;
	bottom: -6px;
`