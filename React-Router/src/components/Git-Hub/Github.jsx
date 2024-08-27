import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users/ubaid0321`).then(response=>response.json()   ).then(data  =>{console.log(data)
  setdata(data)})
  
  },[])
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="github-picture" width={300}/></div>
  )
}

export default Github