import React from 'react'
import importAll from 'import-all.macro'
const importIcons = importAll.sync('./icons/*.svg')
const {basename} = require('path')

const getName = path => basename(path, '.svg')
const getComponent = path => importIcons[path].ReactComponent
const getIconObject = path => ({ [getName(path)]: getComponent(path) })
const reduceIconObject = (acc, path) => ({ ...acc, ...getIconObject(path) })

const icons = Object.keys(importIcons).reduce(reduceIconObject, {})
const iconNames = Object.keys(icons)

const Icon = (props) => {
  const Component = icons[props.icon]
  return <Component {...props} />
}

Icon.displayName = 'CareCarIcon'

export {
  Icon,
  iconNames
}
