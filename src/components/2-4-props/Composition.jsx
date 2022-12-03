import React from 'react'

function Welcome(props){
    return <p>hi, {props.name}</p>
}
 
export default function Composition() {
  return (
    <div><Welcome name="Jim" /></div>
  )
}
