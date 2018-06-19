import React, { Component } from 'react'
import { RootCloseWrapper } from 'react-overlays'

import WindowToolbar from '../WindowToolbar'
import WindowMenuButton from './WindowMenuButton'

class WindowMenuGroup extends Component {
  constructor() {
    super()
    this.state = {
      openedMenuKey: null,
    }
  }

  onClickMenuButton = (menuKey) => () => {
    console.log('fuck')
    this.setState(state => ({ openedMenuKey: state.openedMenuKey === menuKey ? null : menuKey }))
  }

  onMouseEnterMenuButton = (menuKey) => () => {
    if (this.state.openedMenuKey !== null && this.state.openedMenuKey !== menuKey) {
      this.setState({ openedMenuKey: menuKey })
    }
  }

  closeWindowMenu = () => {
    console.log('close menu')
    this.setState({ openedMenuKey: null })
  }

  render() {
    let { menus } = this.props
    menus = menus || []
    const { openedMenuKey } = this.state

    return (
      <RootCloseWrapper onRootClose={this.closeWindowMenu} event="mousedown">
        <WindowToolbar>
          {menus.map(({label, items, underline}, i) => <WindowMenuButton
            {...{label, items, underline}}
            key={i}
            menuKey={i}
            menuOpen={openedMenuKey === i}
            onClick={this.onClickMenuButton(i)}
            onMouseEnterButton={this.onMouseEnterMenuButton(i)}
            onItemSelected={this.closeWindowMenu}
          />)}
        </WindowToolbar>
      </RootCloseWrapper>
    )
  }
}

export default WindowMenuGroup
