import React from 'react'
import Navbar from './Components/Navbar'
import Timeline from '@mui/lab/Timeline';
// import PortfolioTimeline from './Components/components/PortfolioTimeline'



const Home = () => {
  return (
    <div>

      
       <div className='Home-page w-screen h-screen bg-cover '>
        
        <Navbar />
     <Timeline></Timeline>

       </div>
    </div>
  )
}

export default Home
