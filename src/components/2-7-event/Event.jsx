import React from 'react'

export default function Event() {

    const clickCapture = (e) => {console.dir(e); console.log('clickCapture')};
    const mouseLeave = (e) => {console.dir(e); console.log('')};
    const clickCapture2 = () => {console.log('clickCapture2')};
    const clickBubble = () => {console.log('clickBubble')};
    const buttonClick = () => {console.log( 'buttonClick')};

  return (
    <div  onClickCapture={clickCapture}>
        <div onClickCapture={clickCapture2} onClick={clickBubble}>
             <button onClick={buttonClick} onMouseLeave={mouseLeave}>button</button>
        </div>
    </div>
  )
}
