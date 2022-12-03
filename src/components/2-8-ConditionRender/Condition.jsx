import {React, useState} from 'react'

const GuestGrid = (props) =>{
    return <p>{props.name} {props.count}</p>
}

const UserGrid = (props) =>{
    return <p>{props.name && `${props.name},`} {props.count ? `${props.count} t` : null}</p>
}

const Grid = (props) =>{

    return props.isLog ? <UserGrid name="min" count={0} /> : <GuestGrid />;
}

export default function Condition() {

    const [log, setLog] = useState(!false);
    
  return (
    <div><Grid isLog={log}/></div>
  )
}
