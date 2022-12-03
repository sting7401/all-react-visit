import React from 'react'

export default function List() {
  const todos = [
    {id: 1, text: '1'},
    {id: 2, text: '12'},
    {id: 3, text: '13'},
    {id:4, text: '14'},
    {id: 5, text: '15'},
  ];

  const Item = (props) => {
    return <li aria-label={props.text}>{props.text}</li>
  };

  const todoList = todos.map((item) => <Item key={item.id} text={item.text} />);

  return (
    <>
    
    <ul>
      {todoList}
      </ul></>
  )
}
