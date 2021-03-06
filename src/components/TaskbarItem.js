import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RidgedButton from '../atoms/RidgedButton'

const Root = RidgedButton.extend`
  justify-content: flex-start;
  padding: 1px 4px;
`

const IconImage = styled.img.attrs({
  draggable: false,
})`
  width: 16px;
  height: 16px;
  margin-right: 3px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`

const Text = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

class TaskbarItem extends Component {
  render() {
    const {
      label,
      icon,
      focused,
      ...props
    } = this.props

    return (
      <Root className="reactows95-TaskbarItem" pressed={focused} bold={focused} {...props}>
        {icon && <IconImage src={icon}/>}
        <Text>{label}</Text>
      </Root>
    )
  }
}

TaskbarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  focused: PropTypes.bool,
}

export default TaskbarItem
