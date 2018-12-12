import React, { Component } from 'react'

import {Icon, iconNames} from '@carecar/react-icons'

export default class App extends Component {
  render () {
    return (
      <ul>
        {iconNames.map(name => (
          <li key={name}>
            <code>{name}</code>
              <Icon icon={name} color="#7619D2" />
              <Icon icon={name} color="#F59300" />
              <Icon icon={name} color="#D21976" />
          </li>
        ))}
      </ul>
    )
  }
}
