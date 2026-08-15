'use client'
import React from 'react'

const JoinButton = () => {
  const [joined, setJoined] = React.useState(false);
  return (
    <button onClick={() => setJoined(!joined)}>
      {joined ? 'Leave Community' : 'Join Community'}
    </button>
  )
}

export default JoinButton