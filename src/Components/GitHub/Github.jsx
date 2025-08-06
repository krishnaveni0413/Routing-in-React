import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch('https://github.com/user/krishnaveni0413')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })

    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Follower : {data.followers}
    <img className='text-center' src={data.avatar_url} alt="Git pIcture" width={300}/> </div>
  )
}

export default Github