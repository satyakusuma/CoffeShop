import React from 'react'
import Header from './Header'
import Content from './Content'
import BottomNav from '../components/BottomNav'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-left">
        <Header/>
        <Content/>
        <BottomNav/>
    </div>
    
  )
}

export default Home