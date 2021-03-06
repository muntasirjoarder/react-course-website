import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticData from '../../staticData.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-tranform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
          <h1>Develop React apps</h1>
          <p>Build complete React application in 6 hours.</p>
          <Link to="/page-2/">Watch the video</Link>   
          <div className="Logos">
            <img src={require('../images/logo-sketch.png')} width="50" />
            <img src={require('../images/logo-figma.png')} width="50" />
            <img src={require('../images/logo-studio.png')} width="50" />
            <img src={require('../images/logo-framer.png')} width="50" />
            <img src={require('../images/logo-react.png')} width="50" />
            <img src={require('../images/logo-swift.png')} width="50" />
          </div>   
          <Wave />    
      </div>
    </div> 
    <div className="Cards">
        <h2>11 courses</h2>
        <div className="CardGroup">
                <Card 
                  title="React for Devs"
                  text="12 secxions"
                  image={require('../images/wallpaper.jpg')}
                />
                <Card 
                  title="React for Devs"
                  text="12 secxions"
                  image={require('../images/wallpaper2.jpg')}
                />
                <Card 
                  title="React for Devs"
                  text="12 secxions"
                  image={require('../images/wallpaper3.jpg')}
                />
            
                <Card 
                  title="React for Devs"
                  text="12 secxions"
                  image={require('../images/wallpaper4.jpg')}
                />
                <Card 
                  title="React for Devs"
                  text="12 secxions"
                  image={require('../images/wallpaper.jpg')}
                />
          </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo = {require('../images/logo-react.png')}
      title = "React for designers"
      text="Lorem ipsum dolor sit amet, eruditi expetenda ex vix, ius ne aliquid mnesarchum, delenit labores id mei. Dicit paulo antiopam eos ne. Eu sed tempor option, eam ut tractatos patrioque. Eam ex tale munere luptatum, quo ad saperet adipiscing, debet tamquam cu sea."
    />


     <SectionCaption>12 Courses. More coming</SectionCaption>
     <SectionGroup>
        {staticData.cells.map(cell => (
          <Cell 
            image = {cell.image}
            title = {cell.title}
          />
        ))}
     </SectionGroup>
   
  </div>
)

export default IndexPage
