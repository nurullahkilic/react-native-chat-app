import React from 'react'
import { TouchableHighlight } from "react-native"

function TouchableIcon({children, ...props}) {
  return (
    <TouchableHighlight underlayColor="transparent" {...props}>{children}</TouchableHighlight>
  )
}

export default TouchableIcon