import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import { request } from 'https';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components';
import Plx from 'react-plx'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn how to design with React</h1>
        <p>This is my first React project.</p>
        <p>Always learning.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <Wave />
    </div>
    <div className="CardGroup">
      <Plx parallaxData={SlideIn}>
      <Card
        title="React for designers"
        text="12 sections"
        image={require('../../static/images/wallpaper2.jpg')}
      />
      </Plx>
      <Card
        title="React for Two"
        text="12 sections"
        image={require('../../static/images/wallpaper4.jpg')}
      />
      <Card
        title="React for Two"
        text="12 sections"
        image={require('../../static/images/wallpaper4.jpg')}
      />
      <Card
        title="React for Two"
        text="12 sections"
        image={require('../../static/images/wallpaper4.jpg')}
      />
    </div>
    <Section
        image={require('../../static/images/wallpaper2.jpg')}
        logo={require('../../static/images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
  </div> 
)

export default IndexPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: $94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const SlideIn = [
  {
    start: 'self',
    startOffset: 0,
    duration: 500,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
      {
        startValue: 30,
        endValue: 0,
        property: "rotate"
      }
    ]
  }
]