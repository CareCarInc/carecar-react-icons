import React, { Component } from 'react'

import {Icon, iconNames} from '@carecar/react-icons'

export default class App extends Component {
  render () {
    return (
      <ul>
        {iconNames.map(name => (
          <li key={name}>
            <code>{name}</code>
            <Icon icon={name} color="darkblue" />
            <Icon icon={name} color="violet" />
          </li>
        ))}
      </ul>
    )
  }
}
