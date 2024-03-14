import React from 'react'

function Comments({ video, displayComments }) {

  const renderComments = video.comments.map(comment => {

    return (
      <div id="comment" key={comment.id}>
        <p> {comment.user}</p>
        <p> {comment.comment}</p>
      </div>
    )
  })


  const commentClassName = displayComments ? "display-comments" : "hide-comments"

  return (
    <>
      <hr id="line"></hr>
      <div id={commentClassName} style={{ marginTop: "50px", textAlign: "center" }}>
        <div>{video.comments.length} Comments</div>
        <div>{renderComments}</div>
      </div>
    </>
  )
}

export default Comments

