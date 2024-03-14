import React from 'react'

function Header({ video, upVotes, downVotes, onUpVotes, downUpVotes, displayComments, onDisplayComments }) {

  const commentText = displayComments ? "Hide Comments" : "Show Comments"

  return (
    <>
      <div style={{ textAlign: "center" }}>{video.title}</div>
      <div style={{ textAlign: "center" }}>{video.views} {`| Uploaded ${video.createdAt}`}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onUpVotes}> {`${upVotes} 👍`}</button>
        <button onClick={downUpVotes}> {`${downVotes} 👎`}</button>
        <div id="hide-comments-button">
          <button onClick={onDisplayComments}>{commentText}</button>
        </div>
      </div>
    </>
  )
}

export default Header