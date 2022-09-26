import React from 'react'

function Person({person}) {
  return (
    <div>
         <h2>I am {person.name}. I am a {person.profession}</h2>
    </div>
  )
}

export default Person