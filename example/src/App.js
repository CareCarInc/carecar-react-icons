import React, { Component } from 'react'

import icons from '@carecar/react-icons'

console.log(icons.items)

export default class App extends Component {
  render () {
    return (
      <div>
        <icons.AddIcon />

        {Object.entries(icons).map(([name, Icon]) => (
          <div key={Icon.displayName}>
          <h2>{Icon.displayName || console.log({name,Icon})}</h2>
            <div><Icon color="red" viewBox="0 0 4em 4em" /></div>


          </div>
        ))}
        {/* <ExampleComponent text='Modern React component module' /> */}
      </div>
    )
  }
}
