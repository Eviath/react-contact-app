import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './index.css';

export default class MenuUI extends Component {
  state = { activeItem: 'kontakty' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="ui container">
        <Menu inverted secondary>
          <Menu.Menu position='right'>
            <Menu.Item
              name='github'
              target="_blank"
              href='https://github.com/Eviath'
              active={activeItem === 'github'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='eviathos'
              target="_blank"
              href='https://eviathos.pl'
              active={activeItem === 'eviathos'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
          
        </Menu>
      </div>
    )
  }
}