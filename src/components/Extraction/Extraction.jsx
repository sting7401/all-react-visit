import React from 'react'

const formatDate = (date) =>{
    return date.toLocaleDateString();
  }

  const Avatar = (props) => {
return (<img className="Avatar"
src={props.user.avatarUrl}
alt={props.user.name} />) 
  }

  const UserInfo = (props) => {
return (
    <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>
) 
  }
  
  const Comment = (props) =>{
    return (
      <div className="Comment">
        <UserInfo user={props.author} />

        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  

export default function Extraction() {
  return (
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
  )
}
