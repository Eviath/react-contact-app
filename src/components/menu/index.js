import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './index.css';

export default class MenuUI extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="ui container">
        <Menu inverted secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='more'
            active={activeItem === 'more'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='github'
              active={activeItem === 'github'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='eviathos'
              active={activeItem === 'eviathos'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
          
        </Menu>
      </div>
    )
  }
}