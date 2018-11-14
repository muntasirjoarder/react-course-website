import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600px;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  background: linear-gradient(102.24deg,#9b51e0 0%, #3436e7 100%);
  border-radius: 30px;
  padding: 16px 60px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border: none;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.15);
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);

  &:hover{
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      transform: translateY(-3px);
  }
`

const LinkGroup = styled.div`
 width: 600px;
 margin: 50px auto;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-gap: 10px;

 a {
     transition: 0.8s;
 }
 a:hover{
     color: black;
 }
`
const CopyRight = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
const Footer = ({data, children})=> (
    <FooterGroup>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
     <Button>Tweet</Button>
      <LinkGroup>
        {data.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
        ))}
      </LinkGroup>
      <CopyRight>{children}</CopyRight>
    </FooterGroup>
)

export default Footer
