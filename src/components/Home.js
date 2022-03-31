import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div style={{height:'100vh'}} className="w-full flex justify-center items-center">
        <Link to='/invite'>Refer and earn</Link>
    </div>
  )
}

export default Home