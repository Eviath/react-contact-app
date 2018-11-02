import React from 'react'
import './index.css';
import MenuUI from "../menu"
import { Header, Icon, Container } from 'semantic-ui-react'

const Jumbotron = () => (
  <div className="ui jumbotron inverted vertical center aligned segment">
    <MenuUI/>

    <div className="ui header">
       <Container className="ui header2" text>
      <Header as='h2' icon inverted textAlign='center'>
      <Icon name='address book outline' />
      <Header.Content>React Contact App</Header.Content>
    </Header>
    </Container>
    </div>
   
    
  </div>
)

export default Jumbotron