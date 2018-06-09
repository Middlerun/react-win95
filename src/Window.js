import React, { Component } from 'react'
import styled from 'styled-components'

import RidgedBox from './atoms/RidgedBox'

const Root = RidgedBox.extend`+++
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1px;
`

const TitleBar = styled.div`
  height: 18px;
  width: 100%;
  padding: 0 2px;
  display: flex;
  align-items: center;
  background-color: ${({hasFocus}) => hasFocus ? '#000082' : '#808080'};
  color: ${({hasFocus}) => hasFocus ? 'white' : '#c0c0c0'};
  font-weight: bold;
  margin-bottom: 1px;
  user-select: none;
`

const WindowContent = styled.div`
  width: 100%;
  flex: 1;
`

class Window extends Component {
  constructor() {
    super()
    this.state = {
      dragging: false,
      dragStart: {},
      geometry: {
        left: 100,
        top: 100,
        width: 300,
        height: 300
      }
    }
  }

  dragStart = (e) => {
    if (this.state.dragging) return

    const mouseCoords = { x: e.screenX, y: e.screenY }
    this.setState(state => ({
      dragging: true,
      dragStart: {
        mouseCoords,
        geometry: state.geometry,
      }
    }))

    addEventListener('mousemove', this.onDragMove)
    addEventListener('mouseup', this.onDragEnd)
  }

  onDragMove = (e) => {
    const newX = e.screenX
    const newY = e.screenY
    this.setState(state => ({
      geometry: {
        ...state.geometry,
        left: state.dragStart.geometry.left + (newX - state.dragStart.mouseCoords.x),
        top:  state.dragStart.geometry.top  + (newY - state.dragStart.mouseCoords.y),
      },
    }))
  }

  onDragEnd = () => {
    this.setState({ dragging: false })

    removeEventListener('mousemove', this.onDragMove)
    removeEventListener('mouseup', this.onDragEnd)
  }

  render() {
    const { geometry } = this.state

    return (
      <Root style={geometry}>
        <TitleBar onMouseDown={this.dragStart}>
          Title
        </TitleBar>
        <WindowContent>
          Some content
        </WindowContent>
      </Root>
    )
  }
}

export default Window