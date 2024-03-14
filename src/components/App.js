import video from "../data/video.js";
import Comments from "./Comments.js";
import Header from "./Header.js";
import React, { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownVotes] = useState(video.downvotes)
  const [displayComments, setDisplayComments] = useState(true)


  const handleUpVotes = () => {
    setUpvotes(prev => prev + 1)
  }

  const handleDownVotes = () => {
    setDownVotes(prev => prev + 1)
  }

  const handleDisplayComments = () => {
    setDisplayComments(prev => !prev)
  }


  return (
    <>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dpw9EHDh2bM"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <h1>
        <Header 
        video={video} 
        upVotes={upvotes} 
        downVotes={downvotes} 
        onUpVotes={handleUpVotes} 
        downUpVotes={handleDownVotes}
        displayComments={displayComments} 
        onDisplayComments={handleDisplayComments}
        />
        <Comments 
        video={video}
        displayComments={displayComments} 
        />
      </h1>
    </>
  );
}

export default App;
