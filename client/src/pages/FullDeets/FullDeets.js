import React from 'react'
import { useParams } from 'react-router-dom'

const FullDeets = () => {
    const {id}=useParams();
  return (
    
    <div>FullDeets {id}</div>
  )
}

export {FullDeets}