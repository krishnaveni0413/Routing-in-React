import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid}=useParams()
  return (
    <div className='text-4xl bg-gray-600 text-white text-center py-3'>User: {userid}</div>
  )
}

export default User